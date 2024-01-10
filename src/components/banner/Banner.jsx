import React from 'react';
import PropTypes from 'prop-types';

import './banner.scss';

function Banner ({banner, text}) {
  
  return (
    <div className='banner'>
      <img className='banner_img' src={banner} alt='banner-img-mobile-version'/>
      {text? <h2>{text}</h2> : null}      
    </div>
  )
}

Banner.propTypes = {
  banner: PropTypes.string.isRequired,
  text: PropTypes.string
}

export default Banner;