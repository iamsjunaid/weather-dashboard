type WeatherItem = {
    dt_txt: string;
    main: {
        temp: number;
    };
    weather: {
        main: string;
        description: string;
    }[];
};

type CityInfo = {
    name: string;
};

type WeatherData = {
    city: CityInfo;
    list: WeatherItem[];
};

interface CityCardProps {
    data: WeatherData;
    onRemove: (city: string) => void;
}

export default function CityCard({ data, onRemove }: CityCardProps) {
    const cityName = data.city.name;
    const current = data.list[0];
    const daily = data.list.filter((f: WeatherItem) => f.dt_txt.includes("12:00:00"));

    return (
        <div className="p-4 rounded shadow bg-white">
            <h2 className="text-lg font-semibold flex justify-between">
                {cityName}
                <button
                    onClick={() => onRemove(cityName)}
                >
                    ✕
                </button>
            </h2>

            {/* Current Weather */}
            <p className="text-2xl font-bold">
                {Math.round(current.main.temp)}°C
            </p>
            <p className="capitalize">{current.weather[0].description}</p>

            {/* Forecast */}
            <h3 className="mt-4 font-medium">5-Day Forecast</h3>
            <div className="grid grid-cols-5 gap-2 mt-2 text-center">
                {daily.map((day: WeatherItem, i: number) => (
                    <div
                        key={i}
                        className="p-2 bg-gray-100 rounded text-sm flex flex-col gap-1 w-16"
                    >
                        <p>{day.dt_txt.split(" ")[0].slice(5)}</p>
                        <p>{Math.round(day.main.temp)}°</p>
                        <p>{day.weather[0].main}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
