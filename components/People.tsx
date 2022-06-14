import { ProfileCard } from 'components';

interface Props {
  className?: string;
}

interface IPerson {
  user_id: number;
}

export const People: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {data.map((person: IPerson) => (
        <ProfileCard key={person.user_id} person={person} />
      ))}
    </div>
  );
};
