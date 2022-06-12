import type { NextPage } from 'next';
import { Layout, People } from 'components';

const PeoplePage: NextPage = () => {
  return (
    <Layout>
      <h1 className='mb-3 text-4xl font-semibold'>People</h1>
      <p className='text-2xl font-light mb-3'>
        Explore the profiles of people who are part of the local community.
      </p>

      <hr className='mb-3'></hr>

      <People />
    </Layout>
  );
};

export default PeoplePage;
