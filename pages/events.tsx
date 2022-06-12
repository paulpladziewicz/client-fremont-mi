import type { NextPage } from 'next';
import { Layout, Events } from 'components';

const EventsPage: NextPage = () => {
  return (
    <Layout>
      <h1 className='mb-3 text-4xl font-semibold'>Events</h1>
      <p className='text-2xl font-light mb-3'>
        Find local events, right here in town.
      </p>

      <hr className='mb-3'></hr>

      <Events />
    </Layout>
  );
};

export default EventsPage;
