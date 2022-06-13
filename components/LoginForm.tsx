import { useState } from 'react';
import { Logo, Input, Button } from 'components';
import { Formik } from 'formik';
import * as yup from 'yup';
import { CenteredDiv } from 'components/CenteredDiv';
import axios from 'axios';
import { login } from 'redux-toolkit/features/userSlice';
import { useAppDispatch, useAppSelector } from 'redux-toolkit/hooks';
import { useRouter } from 'next/router';
import { getErrorMessage } from '../utils';
import { setPageLevelMessage } from '../redux-toolkit/features/errorMessageSlice';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address.')
    .required('Email is required'),
  password: yup.string().required('Password is required')
});

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [pageLevelMessage, setPageLevelMessage] = useState('');
  const router = useRouter();

  const renderPageLevelMessage = () => {
    if (!pageLevelMessage) return null;

    return (
      <div className='bg-indigo-700 p-4 mb-4 rounded-lg'>
        <p className='text-white'>{pageLevelMessage}</p>
      </div>
    );
  };

  return (
    <CenteredDiv>
      <div style={{ width: '300px' }}>
        <Logo className='mb-4 text-center' size='2.5rem' />
        {renderPageLevelMessage()}
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={async (data, { setSubmitting }) => {
            setSubmitting(true);
            try {
              const res = await axios.post('http://localhost:4000/login', data);
              dispatch(login(res.data.user));
              localStorage.setItem('token', res.data.token);
              await router.push('/dashboard');
            } catch (e: any) {
              console.log(e.message);
              setPageLevelMessage(getErrorMessage(e.message));
            }
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
