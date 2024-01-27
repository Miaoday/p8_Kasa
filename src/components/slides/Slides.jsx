import { useState } from 'react';
import arrowLeft from '../../assets/images/arrow_left_ios-24px.png';
import arrowRight from '../../assets/images/arrow_right_ios-24px.png'
import '../slides/slides.scss';

function Slides ({ title, pictures}) {
const [currentIndex, setCurrentIndex]= useState(0);
const slidesLength = pictures.length;
const counter = `${currentIndex +1}/ ${slidesLength}`;

const nextSlide = () => {
  setCurrentIndex((currentIndex)=>(currentIndex+1) % slidesLength);
};
const prevSlide = () => {
  setCurrentIndex((currentIndex)=>(currentIndex-1+slidesLength) % slidesLength);
};
  return (
    <div className='slides_box'>
      <img src={pictures[currentIndex]} alt={title} className='slides_box_picture'/>

      {slidesLength >1 &&
      <div className='arrow_box'>
        <button className='arrow_btn'>
          <img src={arrowRight} alt='next_one' onClick={nextSlide} className='arrow_btn_right'/>
        </button>
        <button className='arrow_btn'>
          <img src={arrowLeft} alt='previous_one' onClick={prevSlide} className='arrow_btn_left'/> 
        </button>       
      </div>     
      }   
      {slidesLength >1 &&
      <div className='counter'>{counter}</div> 
      } 
    </div>
  )
}

export default Slides