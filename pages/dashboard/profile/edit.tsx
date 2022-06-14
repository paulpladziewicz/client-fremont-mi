import type { NextPage } from 'next';
import { Layout, ProfileForm } from 'components';
import axios from 'lib/axios';
import { API_ROUTES } from 'constants/apiRoutes';
import { useEffect } from 'react';
import { login, logout } from 'redux-toolkit/features/userSlice';
import { useAppDispatch } from 'redux-toolkit/hooks';
import { useRouter } from 'next/router';

const EditProfile: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get(API_ROUTES.USER, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        dispatch(login(res.data));
      })
      .catch(() => {
        localStorage.removeItem('token');
        dispatch(logout());
        router.push('/login');
      });
  }, []);

  return (
    <Layout>
      <h1>Edit Profile</h1>
      <ProfileForm />
    </Layout>
  );
};

export default EditProfile;
