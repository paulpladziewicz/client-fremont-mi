import type { NextPage } from 'next';
import { Layout, Events } from 'components';
import axios from 'axios';

const EventsPage: NextPage = ({ events }) => {
  return (
    <Layout>
      <h1 className='mb-3 text-4xl font-semibold'>Events</h1>
      <p className='text-2xl font-light mb-3'>
        Find local events, right here in town.
      </p>

      <hr className='mb-3'></hr>

      <Events events={events} />
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await axios.get('http://localhost:4000/events');
  const events = res.data.events;

  return {
    props: {
      events
    },
    revalidate: 60
  };
}

export default EventsPage;
