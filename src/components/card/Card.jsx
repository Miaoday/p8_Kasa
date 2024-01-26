import React from "react";
import '../card/card.scss';

function Card ({cover, title}) {
  return(
    <div className="card">
      <img src={cover} alt='cover of the appartement' className="card_img"/>
      <h3 className="card_txt">{title}</h3>
    </div>
  )
}

export default Card