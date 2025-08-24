interface CityFormProps {
    newCity: string;
    setNewCity: (val: string) => void;
    onAdd: () => void;
}

export default function CityForm({ newCity, setNewCity, onAdd }: CityFormProps) {
    return (
        <div className="flex gap-2 mb-4">
            <input
                className="p-2 rounded w-full md:w-3/4 bg-gray-100"
                value={newCity}
                onChange={e => setNewCity(e.target.value)}
                placeholder="Enter city"
            />
            <button
                onClick={onAdd}
                className="px-4 py-1 rounded text-sm border bg-gray-800 text-white"
            >
                Add City
            </button>
        </div>
    );
}
