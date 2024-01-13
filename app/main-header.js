import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.png';
import NavLink from './components/nav-link/nav-link'
import styles from './main-header.module.css';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href={"/"}>
        <Image src={logo} alt="food img" priority />
        NextLevel Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href={"/meals"}>Meals</NavLink>
          </li>
          <li>
            <NavLink href={"/community"}>Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}