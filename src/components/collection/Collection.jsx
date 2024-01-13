// import React from 'react';
import Card from '../card/Card.jsx';
import dataList from '../data/appartements.json';
import '../collection/collection.scss';

function Collection () {
  return(
    <section>
      {dataList.map(function(data){
        return(
          <Card key={data.id} 
          id={data.id} 
          title={data.title} 
          cover={data.cover} 
          />
        )
      })}
    </section>
  )   
}

export default Collection