import type { NextPage } from 'next';
import { Layout, Businesses } from 'components';

const BusinessesPage: NextPage = () => {
  return (
    <Layout>
      <h1 className='mb-3 text-4xl font-semibold'>Businesses</h1>
      <p className='text-2xl font-light mb-3'>
        Helping you find and support businesses that service Fremont, MI.
      </p>

      <hr className='mb-3'></hr>

      <Businesses />
    </Layout>
  );
};

export default BusinessesPage;
