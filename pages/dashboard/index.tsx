import type { NextPage } from 'next';
import {
  BusinessesDashboardDisplay,
  EventsDashboardDisplay,
  Layout,
  ProfileDashboardDisplay
} from 'components';
import { useAppDispatch } from '../../redux-toolkit/hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';
import { API_ROUTES } from '../../constants/apiRoutes';
import { login, logout } from '../../redux-toolkit/features/userSlice';

// @ts-ignore
const Dashboard: NextPage = ({ data: person }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //
  //   axios
  //     .get(API_ROUTES.USER, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     })
  //     .then((res) => {
  //       dispatch(login(res.data));
  //     })
  //     .catch(() => {
  //       localStorage.removeItem('token');
  //       dispatch(logout());
  //       router.push('/login');
  //     });
  // }, []);

  return (
    <Layout>
      <h1 className='mb-3 text-4xl font-semibold'>Dashboard</h1>
      <p className='text-2xl font-light mb-3'>
        Create, review, update, or delete a profile, event, or business.
      </p>

      <hr className='mb-3'></hr>

      <ProfileDashboardDisplay data={person} />

      <div className='mb-8'></div>

      <EventsDashboardDisplay />

      <div className='mb-8'></div>

      <BusinessesDashboardDisplay />
    </Layout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      data: {
        user_id: 4,
        first_name: 'Paul',
        last_name: 'Pladziewicz',
        about: 'This is all I am about.',
        s3_image_pathname: null,
        facebook_url: null,
        instagram_url: null,
        twitter_url: null,
        linkedin_url: null
      }
    }
  };
}

export default Dashboard;
