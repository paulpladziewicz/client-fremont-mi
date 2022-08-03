import styles from 'styles/Navbar.module.css';
import {  ButtonLink, Logo } from 'components';
import Link from 'next/link';
import {useEffect, useState} from "react";
import getCognitoURL from "../utils/getCognitoURL";

export const Navbar: React.FC = () => {
    const [hostname, setHostname] = useState('localhost');

    useEffect(() => {
       setHostname(window.location.hostname);
    }, [])

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
      <ul>
          <ButtonLink href={getCognitoURL(hostname).login} text='Login' className='mr-2' />
          <ButtonLink href={getCognitoURL(hostname).logout} text='Logout' />
          <ButtonLink href={getCognitoURL(hostname).register} text='Register' />
      </ul>
    </nav>
  );
};
