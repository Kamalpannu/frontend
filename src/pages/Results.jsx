import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FlightList from '../components/FlightList';
import NoResults from '../components/NoResults';
import Button from '@mui/material/Button';

export default function Results() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const navigate = useNavigate();
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!from || !to) return;

    const fetchFlights = async () => {
      try {
        const res = await fetch(`${api}/flights?from=${from}&to=${to}`);
        if (!res.ok) throw new Error('Failed to fetch flights');
        const data = await res.json();
        setFlights(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [from, to]);

  if (!from || !to) return <p>Waiting for search parameters...</p>;
  if (loading) return <p>Loading flights...</p>;
  if (error) return <p>Error: {error}</p>;

  if (flights.length === 0) {
    return (
      <div>
        <NoResults from={from} to={to} />
        <Button variant="outlined" onClick={() => navigate('/')}>
          BackToHome
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h2>Flights from {from} to {to}</h2>
      <FlightList flights={flights} />
      <Button variant="outlined" onClick={() => navigate('/')}>
        BackToHome
      </Button>
    </div>
  );
}
