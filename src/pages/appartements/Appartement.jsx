import React from "react";
import { useParams } from "react-router-dom";
import data from '../../components/data/appartements.json';
import Error from '../../pages/error/Error';
import Slides from '../../components/slides/Slides';
import Rate from '../../components/rate/Rate';
import '../appartements/appartement.scss';

function Appartement () {

  const { id } = useParams();
  const logement = data.find(appartements=> appartements.id ===id);

    if (!logement) {
      return (<Error/>)
    }

    return (
      <section>
        <div>
          <Slides pictures={logement.pictures} title={logement.title} />
          <div>
            <h4>{logement.title}</h4>
            <p>{logement.location}</p>       
            {logement.tags.map((tags)=>{return(<span key={id}>{tags}</span>)})}     
          </div>
          <div>
            <Rate value={parseInt(logement.rating)} maxStars={5}/>

          </div>
        </div>
        
      </section>
    )
}

export default Appartement 