import type { NextPage } from 'next';
import {
  BusinessesDashboardDisplay,
  EventsDashboardDisplay,
  Layout,
  ProfileDashboardDisplay
} from 'components';
import { useAuth } from 'hooks/auth';

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <h1 className='mb-3 text-4xl font-semibold'>Dashboard</h1>
      <p className='text-2xl font-light mb-3'>
        Create, review, update, or delete a profile, event, or business.
      </p>

      <hr className='mb-3'></hr>

      <ProfileDashboardDisplay />

      <div className='mb-8'></div>

      <EventsDashboardDisplay />

      <div className='mb-8'></div>

      <BusinessesDashboardDisplay />
    </Layout>
  );
};

export default Dashboard;
