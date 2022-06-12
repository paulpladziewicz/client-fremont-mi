import { Navbar } from 'components';
import { useAuth } from '../hooks/auth';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const { user } = useAuth({ middleware: 'guest' });
  return (
    <>
      <Navbar user={user} />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
