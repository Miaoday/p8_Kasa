import React from "react";
import '../card/card.scss';
import { Link } from 'react-router-dom';

function Card ({id, cover, title}) {

  return(
  <Link to={`/appartements/${id}`} >
  
    <div className="card">
    <img src={cover} alt={title}/>
    <h3>{title}</h3>
    </div>
  </Link>
  )
}

export default Card