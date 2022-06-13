import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from 'redux-toolkit/features/userSlice';
import axios from 'axios';
import { API_ROUTES } from 'constants/apiRoutes';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
};

export const Auth: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: any) => state.user);

  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');

    // Logout, if token is manually removed
    addEventListener('storage', (event) => {
      if (!token && isLoggedIn) {
        dispatch(logout());
        return router.push('/');
      }

      axios
        .get(API_ROUTES.USER, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(() => {
          return <>{children}</>;
        })
        .catch(() => {
          localStorage.removeItem('token');
        });
    });

    if (token && !isLoggedIn) {
      axios
        .get(API_ROUTES.USER, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          dispatch(login(res.data));
        })
        .catch(() => {
          localStorage.removeItem('token');
        });
    }
  }

  return <>{children}</>;
};
