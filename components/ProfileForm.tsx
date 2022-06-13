import { Input, Button } from 'components';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'lib/axios';
import { API_ROUTES } from 'constants/apiRoutes';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export const ProfileForm: React.FC = () => {
  const router = useRouter();

  const { data: profile, mutate } = useSWR(
    `${API_ROUTES.PEOPLE}/${user?.id}`,
    () =>
      axios
        .get(`${API_ROUTES.PEOPLE}/${user?.id}`)
        .then((res) => res.data)
        .catch((error) => {
          console.log(error);
        })
  );

  const handleOnChange = (e: any) => {
    let formData = new FormData();
    const file = e.target.files[0];
    if (!file) return;
    formData.append('file', file);
    axios
      .post('/api/people/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => {
        mutate({ ...profile, s3_image_url: res.data.s3_image_url });
      });
  };

  const validationSchema = yup.object().shape({
    first_name: yup.string().required('First name is required.'),
    last_name: yup.string().required('Last name is required.'),
    about: yup.string().required('About is required.'),
    interests: yup.string().required('Interests is required.')
  });

  return (
    <div>
      <div>
        <Formik
          enableReinitialize={true}
          initialValues={{
            first_name: profile?.first_name || '',
            last_name: profile?.last_name || '',
            about: profile?.about || '',
            interests: profile?.interests || ''
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            axios
              .put(`${API_ROUTES.PEOPLE}/${user?.id}`, {
                user_id: user?.id,
                first_name: data.first_name,
                last_name: data.last_name,
                about: data.about,
                interests: data.interests
              })
              .then(() => {
                router.push('/dashboard');
              })
              .catch((err) => {
                console.log(err);
                setSubmitting(false);
              });
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type='file'
                name='profile-image'
                onChange={handleOnChange}
                accept='image/*'
              />
              <Input
                name='first_name'
                label='First Name'
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.first_name}
              />
              <Input
                name='last_name'
                label='Last Name'
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.last_name}
              />
              <Input
                name='about'
                label='About'
                value={values.about}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.about}
              />
              <Input
                name='interests'
                label='Interests'
                value={values.interests}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.interests}
              />
              <Button
                type='submit'
                disabled={isSubmitting}
                className='btn btn-primary'
                text='Update'
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
