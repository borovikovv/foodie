import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.png';
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
            <Link href={"/meals"}>Meals</Link>
          </li>
          <li>
            <Link href={"/community"}>Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}