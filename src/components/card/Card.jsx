import React from "react";
import './cards/card.scss';
import { Link } from 'react-router-dom';

function Card ({id, cover, title}) {

  return(
  <Link to={`/Appartement.${id}`} >
  
    <div>
    <img src={cover} alt={title}/>
    <h3>{title}</h3>
    </div>
  </Link>
  )

}

export default Card;