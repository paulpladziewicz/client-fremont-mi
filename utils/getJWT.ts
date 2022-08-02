// @ts-ignore
const getJWT = () => {
  let jwt: string | null = '';

  if (typeof window !== 'undefined') {
    jwt = localStorage.getItem('token');
  }

  return jwt;
};
