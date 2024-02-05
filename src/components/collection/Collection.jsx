import React from 'react';
import { Link } from 'react-router-dom';
import dataList from '../data/appartements.json';
import Card from '../card/Card.jsx';
import '../collection/collection.scss';

function Collection () {
  return(
    <div className='collection'>
        {dataList.map(function(data) {
          return(
            <Link key={data.id} to={`/appartements/${data.id}`} >
              <Card key={data.id} id={data.id} title={data.title} cover={data.cover} />
            </Link>
          )
        })}      
    </div>
  )   
}
export default Collection