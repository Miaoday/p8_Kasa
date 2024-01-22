import React from "react";
// import { Link } from 'react-router-dom';
import '../card/card.scss';

function Card ({id, cover, title}) {
  return(
  // <Link to={`/appartements/${id}`} >
    <div className="card">
      <img src={cover} alt='cover of the appartement' className="card_img"/>
      <h3 className="card_txt">{title}</h3>
    </div>
  // </Link>
  )
}

export default Card