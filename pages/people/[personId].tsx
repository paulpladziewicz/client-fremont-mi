import { Layout } from 'components';
import axios from "axios";

const PublicProfile = ({ person }) => {

  const renderProfile = () => {
    if (!person) return;

    return <h1>{person.first_name}</h1>;
  };

  return <Layout>{renderProfile()}</Layout>;
};

export async function getServerSideProps(context) {
  const { query: { personId } } = context;
  const res = await axios.get(`http://localhost:4000/people/${personId}`);
  const person = res.data;

  return {
    props: {
      person
    }
  };
}

export default PublicProfile;
