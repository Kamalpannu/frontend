import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

export default function SearchForm() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/results?from=${from}&to=${to}`);
    };

    return (
        <form 
            onSubmit={handleSubmit}
            className="bg-white bg-opacity-20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-lg text-white"
        >
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">From</label>
                <input 
                    type="text" 
                    value={from} 
                    onChange={(e) => setFrom(e.target.value)} 
                    placeholder="Enter departure city"
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-80 text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div style={{ marginBottom: '24px' }}>
                <label className="block text-sm font-semibold mb-1">To</label>
                <input 
                    type="text" 
                    value={to} 
                    onChange={(e) => setTo(e.target.value)} 
                    placeholder="Enter destination city"
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-80 text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 py-3 rounded-lg text-lg font-semibold tracking-wide shadow-lg hover:shadow-xl"
                >
                    Search Flights
                </button>
            </div>
        </form>
    );
}
