import useSWR from 'swr';
import axios from 'lib/axios';

interface Props {
  className?: string;
}

export const Events: React.FC<Props> = () => {
  const {
    data: events,
    error,
    mutate
  } = useSWR('/api/events', () =>
    axios
      .get('/api/events')
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      })
  );

  const content = events ? (
    <ul>
      {events.map((event) => (
        <li key={event.id}>{event.title}</li>
      ))}
    </ul>
  ) : (
    <div>Loading...</div>
  );

  return <div>{content}</div>;
};
