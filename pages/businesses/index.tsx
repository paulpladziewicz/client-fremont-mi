import type { NextPage } from 'next';
import { Layout, Businesses } from 'components';
import axios from "axios";

const BusinessesPage: NextPage = ({ businesses }) => {
  return (
    <Layout>
      <h1 className='mb-3 text-4xl font-semibold'>Businesses</h1>
      <p className='text-2xl font-light mb-3'>
        Helping you find and support businesses that service Fremont, MI.
      </p>

      <hr className='mb-3'></hr>

        {businesses.map((business) => (
            <li key={business.business_id}>{business.name}</li>
        ))}
    </Layout>
  );
};

export async function getStaticProps() {
    const res = await axios.get('http://localhost:4000/businesses');
    const businesses = res.data.businesses;

    return {
        props: {
            businesses
        },
        revalidate: 60
    };
}

export default BusinessesPage;
