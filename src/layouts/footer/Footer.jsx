import React from 'react';
import logo from '../../assets/images/footer_logo.png';
import './footer.scss';

function Footer () {
  return(
    <footer className='footer'>
      <img src={logo} alt='footer-logo' className='footer_img'/>
      <p className='footer_txt'>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
export default Footer;