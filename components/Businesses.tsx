import useSWR from 'swr';
import axios from 'lib/axios';

interface Props {
  className?: string;
}

export const Businesses: React.FC<Props> = () => {
  const {
    data: businesses,
    error,
    mutate
  } = useSWR('/api/businesses', () =>
    axios
      .get('/api/businesses')
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      })
  );

  const content = businesses ? (
    <ul>
      {businesses.map((business) => (
        <li key={business.id}>{business.title}</li>
      ))}
    </ul>
  ) : (
    <div>Loading...</div>
  );

  return <div>{content}</div>;
};
