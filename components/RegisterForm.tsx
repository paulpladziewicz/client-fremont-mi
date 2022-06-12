import { Logo, Input, Button, CenteredDiv } from 'components';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useAuth } from '../hooks/auth';

export const RegisterForm: React.FC = () => {
  const { register } = useAuth();

  const validationSchema = yup.object().shape({
    first_name: yup
      .string()
      .required('First name is required.')
      .max(30, 'First name cannot be more than 30 characters.'),
    last_name: yup
      .string()
      .required('Last name is required.')
      .max(30, 'Last name cannot be more than 30 characters.'),
    email: yup
      .string()
      .email('Please enter a valid email address.')
      .required('Email is required.'),
    password: yup
      .string()
      .required('Password is required.')
      .min(8, 'Password needs to be at least 8 characters.'),
    password_confirmation: yup
      .string()
      .required('Please confirm your password.')
      .oneOf(
        [yup.ref('password'), null],
        'Passwords do not match. Please try again.'
      )
  });

  return (
    <CenteredDiv>
      <div style={{ width: '300px' }}>
        <Logo className='mb-4 text-center' size='2.5rem' />
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            register({
              first_name: data.first_name,
              last_name: data.last_name,
              email: data.email,
              password: data.password,
              password_confirmation: data.password_confirmation
            });
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
                label='First name'
                name='first_name'
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.first_name}
                error={errors.first_name && touched.first_name}
                errorMessage={errors.first_name}
              />
              <Input
                className='mb-4'
                label='Last name'
                name='last_name'
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.last_name}
                error={errors.last_name && touched.last_name}
                errorMessage={errors.last_name}
              />
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
                autocomplete='on'
              />
              <Input
                className='mb-4'
                label='Confirm password'
                name='password_confirmation'
                type='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password_confirmation}
                error={
                  errors.password_confirmation && touched.password_confirmation
                }
                errorMessage={errors.password_confirmation}
                autocomplete='on'
              />
              {/* TODO: implement consent - https://itnext.io/simple-react-form-validation-with-formik-yup-and-or-spected-206ebe9e7dcc */}
              <Button
                type='submit'
                disabled={isSubmitting}
                className='mt-4'
                text='Register'
              />
            </form>
          )}
        </Formik>
      </div>
    </CenteredDiv>
  );
};
