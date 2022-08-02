import { getS3ImageURL } from '../utils';
import { SocialIcons } from './SocialIcons';
import Link from 'next/link';

interface Props {
  className?: string;
  person: any;
}

export const ProfileCard: React.FC<Props> = ({ className, person }) => {
  return (
    <Link href={`/people/${person.user_id}`}>
      <div className='pr-4 mb-4 w-1/3 cursor-pointer'>
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
        </div>
      </div>
    </Link>
  );
};
