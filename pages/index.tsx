import type { NextPage } from 'next';
import { Layout, Heading } from 'components';

const Home: NextPage = () => {
  return (
    <Layout>
      <Heading as='h1' className='font-bold pt-4 lg:text-center mb-4'>
        A local directory, just for{' '}
        <span className='text-indigo-700 font-extrabold'>Fremont</span>.
      </Heading>
      <p className='text-4xl font-light lg:w-3/4 lg:text-center lg:mx-auto'>
        Helping people meet one another, find events, and support local
        businesses.
      </p>

      <img className='mx-auto mb-16' src='/AdobeStock_207312615.jpeg' alt='' />

      <p className='text-center mx-auto max-w-4xl leading-relaxed tracking-wide bg-indigo-700 text-white font-bold p-8 text-4xl rounded-2xl'>
        Strengthening our local community by focusing 100% on Fremont.
      </p>

      <p>Anyone can create a profile, event, or business listing.</p>
      <p>As long as you can meet, gather, and serve Fremont, MI.</p>
    </Layout>
  );
};

export default Home;
