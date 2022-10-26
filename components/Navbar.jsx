import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/smuknu_logo.png';
import { MdMenu, MdClose, MdShoppingBag } from 'react-icons/md';
import { useAppContext } from '../context/state';
import CartDropdown from './CartDropdown';
import styled from '../styles/Navbar.module.scss';

const Navbar = () => {
  const { cartItems, cartTotal } = useAppContext();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const menuLinks = [
    { title: 'Forside', href: '/' },
    { title: 'Vores produkter', href: '/produkter' },
    { title: 'Spørg om sundhed', href: '/sundhed' },
    { title: 'Bliv medlem', href: '/medlem' },
  ];
  return (
    <nav className={styled.nav}>
      <div className={styled.navbar}>
        <div className={styled.container}>
          <div className={styled.navbarContent}>
            <Link href='/'>
              <div className={styled.img}>
                <Image src={logo} alt='Hjemme side logo' />
              </div>
            </Link>
            <ul className={styled.navLinks}>
              {menuLinks.map((link, index) => (
                <li key={index} className={styled.navLink}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <MdShoppingBag
              className={`${styled.iconCart} ${cartItems.length > 0 ? styled.pink : ''}`}
              onClick={() => {
                setIsOpenCart((prev) => !prev);
              }}
            />
            {!isOpenMenu ? (
              <MdMenu
                className={styled.iconMenu}
                onClick={() => {
                  setIsOpenMenu((prev) => !prev);
                }}
              />
            ) : (
              <MdClose
                className={styled.iconMenu}
                onClick={() => {
                  setIsOpenMenu((prev) => !prev);
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Dropdown menu with links */}
      <ul className={` ${styled.menu} ${isOpenMenu ? styled.open : ''}`}>
        {menuLinks.map((link, index) => (
          <li
            key={index}
            className={styled.link}
            onClick={() => {
              setIsOpenMenu((prev) => !prev);
            }}
          >
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>

      {/* Cart Dropdown */}
      <CartDropdown props={{ isOpenCart, cartItems, cartTotal }} />
    </nav>
  );
};

export default Navbar;
