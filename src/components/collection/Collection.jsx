// import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../card/Card.jsx';
import '../collection/collection.scss';
import data from '../../data/Appartements.json';

function Collection () {
  const [data, setData] = useState([]);
  console.log(data);

  return(
    <section>
    <Card onclick/>

    </section>
  )
    
}

export default Collection