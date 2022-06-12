import { Logo, Input, Button } from 'components';
import { Formik } from 'formik';
import * as yup from 'yup';
import { CenteredDiv } from 'components/CenteredDiv';
import { useAuth } from 'hooks/auth';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address.')
    .required('Email is required'),
  password: yup.string().required('Password is required')
});

export const LoginForm: React.FC = () => {
  const { login } = useAuth();

  return (
    <CenteredDiv>
      <div style={{ width: '300px' }}>
        <Logo className='mb-4 text-center' size='2.5rem' />
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            const { email, password } = data;
            login({ email, password });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <Input
                className='mb-4'
                label='Email'
                name='email'
                type='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email && touched.email}
                errorMessage={errors.email}
              />
              <Input
                className='mb-4'
                label='Password'
                name='password'
                type='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors.password && touched.password}
                errorMessage={errors.password}
              />
              <Button
                type='submit'
                disabled={isSubmitting}
                className='mt-4'
                text='Login'
              />
            </form>
          )}
        </Formik>
      </div>
    </CenteredDiv>
  );
};
