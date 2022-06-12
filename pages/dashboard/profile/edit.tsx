import type { NextPage } from 'next';
import { Layout, ProfileForm } from 'components';
import axios from 'lib/axios';
import { API_ROUTES } from 'constants/apiRoutes';
import { useAuth } from 'hooks/auth';

const EditProfile: NextPage = () => {
  useAuth({ middleware: 'auth' });

  const profile = {};

  return (
    <Layout>
      <h1>Edit Profile</h1>
      <ProfileForm profile={profile} />
    </Layout>
  );
};

export default EditProfile;
