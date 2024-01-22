import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/Card.jsx';
import dataList from '../data/appartements.json';
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
// function Collection() {
//   return (
//     <div className='collection'>
//       {dataList.map(data => (
//         <Link key={data.id} to={`/appartements/${data.id}`}>
//           <Card key={data.id} id={data.id} title={data.title} cover={data.cover} />
//         </Link>
//       ))}
//     </div>
//   );
// }


export default Collection