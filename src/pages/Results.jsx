import { useSearchParams, useNavigate } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import FlightList from '../components/FlightList';
import NoResults from '../components/NoResults';
import Button from '@mui/material/Button';


export default function Results() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const navigate = useNavigate();


  const GET_FLIGHTS = gql`
  query GetFlights($from: String, $to: String) {
    flights(from: $from, to: $to) {
      id
      from
      to
      price
      airline
      departureTime
    }
  }
`;
console.log(from,to);
  if (!from || !to) {
    return <p>Waiting for search parameters...</p>;
  }
  const { loading, error, data } = useQuery(GET_FLIGHTS, {
    variables: { from, to },
  });
  if (loading) return <p>Loading flights...</p>;
  if (error) return console.log(error);

  const flights = data?.flights || [];
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
