import { Button, ButtonLink, PostOptions } from 'components';
import useSWR from 'swr';
import { API_ROUTES } from '../constants/apiRoutes';
import axios from '../lib/axios';
import { getS3ImageURL } from '../utils';
import { useGetProfileQuery } from 'redux-toolkit/services/peopleApi';
import { useAppSelector } from '../redux-toolkit/hooks';
import { useRouter } from 'next/router';

export const ProfileDashboardDisplay: React.FC = ({ data: profile }) => {
  // const user = useAppSelector(state => state.user);
  // if (user.user.userId) {
  //   const { data: profile, error, isLoading } = useGetProfileQuery(user.user.user_id);
  // }
  // const handlePublish = async () => {
  //   await axios.patch(`${API_ROUTES.PUBLISH}/${user?.id}`, {
  //     published: !profile.published
  //   });
  //   await mutate({ ...profile, published: !profile.published });
  // };
  //
  // const renderPublishButton = () => {
  //   if (profile?.published) {
  //     return <Button onClick={handlePublish} text='Unpublish' />;
  //   }
  //
  //   return <Button onClick={handlePublish} text='Publish' />;
  // };
  //
  // const S3_IMAGE_URL = getS3ImageURL(profile?.s3_image_url);

  return (
    <div className='border border-gray-400 p-4 rounded-2xl'>
      <div className='flex justify-between mb-8'>
        <div className='w-3/12 text-center'>
          <h2 className='text-4xl font-bold text-slate-800'>Profile</h2>
        </div>
        <PostOptions />
      </div>
      <div className='flex'>
        <div className='w-3/12'>
          <img
            className='mx-auto rounded-full w-40 mb-2'
            src={profile?.s3_image_pathname}
            alt='profile image of the user'
          />
        </div>
        <div className='w-9/12'>
          <p className='text-3xl font-bold mb-4 text-slate-800'>
            {profile?.first_name} {profile?.last_name}
          </p>
          <h3 className='text-3xl font-bold mb-2 text-slate-800'>About</h3>
          <p className='text-slate-500 font-medium mb-4'>{profile?.about}</p>
          <h3 className='text-3xl font-bold mb-2 text-slate-800'>Interests</h3>
          <p className='text-indigo-700 font-medium'>{profile?.interests}</p>
        </div>
      </div>
    </div>
  );
};
