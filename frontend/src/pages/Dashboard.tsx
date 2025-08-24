import { useEffect, useState } from "react";
import { getCities, addCity, removeCity } from "../services/cityApi";
import fetchWeather from "../services/weatherApi";
import CityForm from "../components/CityForm";
import CityCard from "../components/CityCard";

type weatherType = {
    city: {
        name: string;
        country: string;
    };
    list: {
        dt: number;
        dt_txt: string;
        main: {
            temp: number;
            pressure: number;
            humidity: number;
        };
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[];
    }[];
};

const getErrorMessage = (err: unknown): string => {
    if (err instanceof Error) return err.message;
    if (typeof err === "string") return err;
    try {
        return JSON.stringify(err);
    } catch {
        return String(err);
    }
};

export default function Dashboard() {
    const [, setCities] = useState<string[]>([]);
    const [weatherData, setWeatherData] = useState<weatherType[]>([]);
    const [newCity, setNewCity] = useState("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const cityList = await getCities();
                setCities(cityList);

                const data = await Promise.all(
                    cityList.map(async (c: string) => {
                        try {
                            return await fetchWeather(c);
                        } catch (err: unknown) {
                            setError(getErrorMessage(err) || "Failed to fetch some weather data.");
                            return null;
                        }
                    })
                );

                setWeatherData(data.filter(Boolean) as weatherType[]);
            } catch (err: unknown) {
                setError(getErrorMessage(err) || "Failed to load cities.");
            }
        })();
    }, []);

    const handleAdd = async () => {
        if (!newCity.trim()) return;
        try {
            const updated = await addCity(newCity);
            setCities(updated);

            const data = await fetchWeather(newCity);
            setWeatherData((prev) => [...prev, data]);
            setNewCity("");
            setError(null); // clear any previous error
        } catch (err: unknown) {
            setError(getErrorMessage(err) || "Failed to add city.");
        }
    };

    const handleRemove = async (city: string) => {
        try {
            const updated = await removeCity(city);
            setCities(updated);
            setWeatherData((prev) => prev.filter((w) => w.city.name !== city));
            setError(null);
        } catch (err: unknown) {
            setError(getErrorMessage(err) || "Failed to remove city.");
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Weather Dashboard</h1>

            {/* Error Banner */}
            {error && (
                <div className="mb-4 p-3 rounded bg-red-100 text-red-700 border border-red-300">
                    {error}
                </div>
            )}

            <CityForm newCity={newCity} setNewCity={setNewCity} onAdd={handleAdd} />

            {weatherData.length === 0 ? (
                <p className="text-gray-500">No cities added yet. Add one above.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {weatherData.map((data: weatherType) => (
                        <CityCard
                            key={data.city.name}
                            data={data}
                            onRemove={handleRemove}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
