import styles from 'styles/Navbar.module.css';
import { Button, ButtonLink, Logo } from 'components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { logout } from 'redux-toolkit/features/userSlice';
import { useAppDispatch, useAppSelector } from 'redux-toolkit/hooks';

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isLoggedIn } = useAppSelector((state) => state.user);

  const handleLogout = async () => {
    await dispatch(logout());
    localStorage.removeItem('token');
    await router.push('/');
  };
  const renderAuthButtons = () => {
    if (isLoggedIn) {
      return (
        <>
          <ButtonLink href='/dashboard' text='Dashboard' className='mr-2' />
          <Button onClick={handleLogout} text='Logout' />
        </>
      );
    } else {
      return (
        <>
          <ButtonLink href='/login' text='Login' className='mr-2' />
          <ButtonLink href='/register' text='Register' />
        </>
      );
    }
  };

  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <ul className={styles.navLinkGroup}>
        <Link href='/people'>
          <a>
            <li className={styles.navLink}>People</li>
          </a>
        </Link>
        <Link href='/events'>
          <a>
            <li className={styles.navLink}>Events</li>
          </a>
        </Link>
        <Link href='/businesses'>
          <a>
            <li className={styles.navLink}>Businesses</li>
          </a>
        </Link>
      </ul>
      <ul>{renderAuthButtons()}</ul>
    </nav>
  );
};
