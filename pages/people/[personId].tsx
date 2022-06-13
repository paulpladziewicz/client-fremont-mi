import { useRouter } from 'next/router';
import { Layout } from 'components';
import { usePublicProfileQuery } from 'redux-toolkit/services/peopleApi';

const PublicProfile = () => {
  const router = useRouter();
  const { personId } = router.query;
  const { data, error, isLoading } = usePublicProfileQuery(personId);
  console.log(data);

  const renderProfile = () => {
    if (!data) return;

    return <h1>{data.first_name}</h1>;
  };

  return <Layout>{renderProfile()}</Layout>;
};

export default PublicProfile;
