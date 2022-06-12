import styles from 'styles/Navbar.module.css';
import { Button, ButtonLink, Logo } from 'components';
import Link from 'next/link';
import { useAuth } from 'hooks/auth';

export const Navbar: React.FC = ({ user }) => {
  const { logout } = useAuth();

  const renderAuthButtons = () => {
    if (user?.id) {
      return (
        <>
          <ButtonLink href='/dashboard' text='Dashboard' className='mr-2' />
          <Button onClick={logout} text='Logout' />
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
