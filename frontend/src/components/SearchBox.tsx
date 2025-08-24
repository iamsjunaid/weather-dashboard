import { useState } from "react";

interface Props {
    onSearch: (city: string) => void;
}

export default function SearchBox({ onSearch }: Props) {
    const [input, setInput] = useState("");

    return (
        <div className="flex gap-2">
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Enter city"
                className="border p-2 rounded flex-grow"
            />
            <button
                onClick={() => { onSearch(input); setInput(""); }}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Add
            </button>
        </div>
    );
}
