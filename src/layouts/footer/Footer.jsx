import React from 'react';
import FooterMobile from '../../assets/images/footer_mobile.png';
import FooterDesktop from '../../assets/images/footer_desktop.png';
import './footer.scss';

function Footer () {
  const isMobile = window.innerWidth <= 767;
  return(
    <footer>
    <img src={isMobile ? FooterMobile : FooterDesktop} alt='footer-logo'/>
    </footer>
  )
}

export default Footer;