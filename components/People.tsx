import { ProfileCard } from 'components';
import { usePeopleQuery } from 'redux-toolkit/services/peopleApi';

interface Props {
  className?: string;
}

interface IPerson {
  user_id: number;
}

export const People: React.FC<Props> = () => {
  const { data, error, isLoading } = usePeopleQuery();

  const content = data ? (
    <div className='flex flex-wrap'>
      {data.profiles.map((person: IPerson) => (
        <ProfileCard key={person.user_id} person={person} />
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );

  return <div>{content}</div>;
};
