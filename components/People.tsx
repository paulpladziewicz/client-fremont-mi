import useSWR from 'swr';
import axios from 'lib/axios';
import { API_ROUTES } from 'constants/apiRoutes';
import { ProfileCard } from 'components';

interface Props {
  className?: string;
}

export const People: React.FC<Props> = () => {
  const { data: people } = useSWR(API_ROUTES.PEOPLE, () =>
    axios
      .get(API_ROUTES.PEOPLE)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      })
  );

  const content = people ? (
    <div className='flex flex-wrap'>
      {people.map((person) => (
        <ProfileCard key={person.id} person={person} />
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );

  return <div>{content}</div>;
};
