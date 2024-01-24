import { useState } from 'react';
import arrowLeft from '../../assets/images/arrow_left_ios-24px.png';
import arrowRight from '../../assets/images/arrow_right_ios-24px.png'
import '../slides/slides.scss';

function Slides ({ title, pictures}) {
const [currentIndex, setCurrentIndex]= useState(0);
const slideLength = pictures.length;
const counter = `${currentIndex +1}/ ${slideLength}`;

const nextSlide = () => {
  setCurrentIndex((currentIndex)=>(currentIndex+1) % slideLength);
};
const prevSlide = () => {
  setCurrentIndex((currentIndex)=>(currentIndex-1) % slideLength);
};
  return (
    <div className='slides_box'>
      <img src={pictures[currentIndex]} alt={title} className='slides_box_picture'/>

      {slideLength >1 &&
      <div>
        <button>
          <img src={arrowRight} alt='next_one' onClick={nextSlide} className='arrow_right'/>
        </button>
        <button>
          <img src={arrowLeft} alt='previous_one' onClick={prevSlide} className='arrow_left' /> 
        </button>
        
        <div className='counter'>{counter}</div> 
      </div>     
      }   
    </div>
  )
}

export default Slides