import React from "react";
import starGrey from '../../assets/images/Grey_star.png';
import starRed from '../../assets/images/Red_star.png';
import '../rate/rate.scss';

function Rate ({rating}) {
  const starLength = 5;
  const stars =[];

  for (let i = 1; i<=starLength; i++) {
    stars.push (
      <img 
      key={i} 
      src={i<= rating? starRed:starGrey}
      alt="Rating_Stars"
      ></img>
    )
  }
  return (
    <div className="stars">{stars}</div>
  );
};

export default Rate