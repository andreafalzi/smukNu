import { FaFacebook, FaPinterest, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

import styled from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styled.footer}>
      <div className={styled.container}>
        <div className={styled.footerIcons}>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <FaFacebook />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <FaInstagram />
          </a>
          <a href='https://pinterest.com' target='_blank' rel='noopener noreferrer'>
            <FaPinterest />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <FaTwitter />
          </a>
          <a href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
            <FaYoutube />
          </a>
        </div>
        <div className={styled.footerInfos}>
          <p>mail@smuk.nu</p>
          <p>+45 123 345 33</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
