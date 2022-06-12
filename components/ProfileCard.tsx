import borders from 'styles/borders.module.css';
import { getS3ImageURL } from '../utils';
import { SocialIcons } from './SocialIcons';

interface Props {
  className?: string;
  person: object;
}

export const ProfileCard: React.FC<Props> = ({ className, person }) => {
  console.log(person);
  return (
    <div className='pr-4 mb-4 w-1/3'>
      <div className='border border-gray-400 p-4 rounded-2xl'>
        <img
          className='mx-auto rounded-full w-40 mb-2'
          src={getS3ImageURL(person.s3_image_url)}
          alt='profile picture'
        />

        <div className='text-center'>
          <h2 className='mb-2'>
            <span className='text-3xl font-bold text-slate-800'>
              {person.first_name} {person.last_name}
            </span>
          </h2>

          <SocialIcons obj={person} />

          <p className='mb-2 text-slate-500 font-medium'>{person.about}</p>
        </div>

        <h3 className='text-xl font-bold text-slate-800 mb-2'>Interests</h3>
        <p className='text-indigo-700 font-medium'>{person.interests}</p>
      </div>
    </div>
  );
};
