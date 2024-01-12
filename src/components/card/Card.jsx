import React from "react";
import '../card/card.scss';
import { Link } from 'react-router-dom';

function Card ({id, cover, title}) {
  console.log(id,cover,title);
  return(
  <Link to={`/appartements/${id}`} >
  
    <div className="card">
    <img src={cover} alt='cover-of-appartement' className="card_img"/>
    <h3 className="card_txt">{title}</h3>
    </div>
  </Link>
  )
}

export default Card