import React from 'react';
import './banner.scss';
// import PropTypes from 'prop-types';


function Banner ({banner, text}) {
  
  return (
    <div className='banner'>
      <img className='banner_img' src={banner} alt='banner-img-mobile-version'/>
      {text? <h2 className='banner_text'>{text}</h2> : null}      
    </div>
  )
}

// Banner.propTypes = {
//   banner: PropTypes.string.isRequired,
//   text: PropTypes.string
// }

export default Banner;