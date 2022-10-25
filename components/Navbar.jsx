import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/smuknu_logo.png';
import { MdMenu, MdClose } from 'react-icons/md';
import styled from '../styles/Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styled.nav}>
      <div className={`${styled.container} ${styled.navbar}`}>
        <Link href='/'>
          <div className={styled.img}>
            <Image src={logo} alt='Hjemme side logo' />
          </div>
        </Link>
        {!isOpen ? (
          <MdMenu
            className={styled.icon}
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          />
        ) : (
          <MdClose
            className={styled.icon}
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          />
        )}
      </div>
      <ul className={`${styled.container} ${styled.menu} ${isOpen ? styled.open : ''}`}>
        <li
          className={styled.link}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <Link href='/'>Forside</Link>
        </li>
        <li
          className={styled.link}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <Link href='/produkter'>Vores produkter</Link>
        </li>
        <li
          className={styled.link}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <Link href='/sundhed'>Spørg om sundhed</Link>
        </li>
        <li
          className={styled.link}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <Link href='/medlem'>Bliv medlem</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
