import SearchForm from '../components/SearchForm';

export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-sky-800 to-sky-400 px-4">
            <div className="flex flex-col items-center gap-10 w-full max-w-2xl text-white text-center">
                <h1 className="text-4xl font-bold tracking-wide drop-shadow-lg">
                    Search for Flights
                </h1>
                <SearchForm />
            </div>
        </div>
    );
}
