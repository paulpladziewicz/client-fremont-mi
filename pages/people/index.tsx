import type { NextPage } from 'next';
import { Layout, People } from 'components';
import axios from 'axios';

// @ts-ignore
const PeoplePage: NextPage = ({ people }) => {
  return (
    <Layout>
      <h1 className='mb-3 text-4xl font-semibold'>People</h1>
      <p className='text-2xl font-light mb-3'>
        Explore the profiles of people who are part of the local community.
      </p>

      <hr className='mb-3'></hr>

      <People data={people} />
    </Layout>
  );
};

// export async function getStaticProps() {
//   const res = await axios.get('http://localhost:4000/people');
//   const people = res.data.profiles;
//
//   return {
//     props: {
//       people
//     },
//     revalidate: 60
//   };
// }

export default PeoplePage;
