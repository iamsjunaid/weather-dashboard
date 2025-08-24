interface Props {
    city: string;
    data: any;
}

export default function CityCard({ city, data }: Props) {
    if (!data) return <div className="p-4 bg-gray-100 rounded">Loading {city}...</div>;

    const today = data.list[0];
    return (
        <div className="p-4 bg-white shadow rounded-xl">
            <h2 className="text-xl font-semibold">{city}</h2>
            <p>Temp: {today.main.temp}°C</p>
            <p>{today.weather[0].description}</p>
            <h3 className="mt-3 font-semibold">Next 5 Days:</h3>
            <ul className="text-sm">
                {data.list.slice(0, 5).map((item: any, i: number) => (
                    <li key={i}>{item.dt_txt} → {item.main.temp}°C</li>
                ))}
            </ul>
        </div>
    );
}
