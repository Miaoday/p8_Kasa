import React from "react";
import { useParams } from "react-router-dom";
import data from '../../components/data/appartements.json';
import Error from '../../pages/error/Error';
import Slides from '../../components/slides/Slides';
import Rate from '../../components/rating/Rating';
import '../appartements/appartement.scss';
import Collapse from "../../components/collapse/Collapse";

function Appartement () {
  const { id } = useParams();
  const flat = data.find(appartements=> appartements.id ===id);
  if (!flat) {return (<Error/>)}

  return (
    <section>
      <div>
        <Slides pictures={flat.pictures} title={flat.title} />
        <div>
          <h4>{flat.title}</h4>
          <p>{flat.location}</p>       
          {flat.tags.map((tags,index)=>{
            return(
              <span key={index}>{tags}</span>
            )})
          }     
        </div>
        <div>
          <Rate rating={flat.rating}/>
          <div>
            <p>{flat.host.name}</p>
            <img src={flat.host.picture} alt={flat.host.name}/>
          </div>          
        </div>
      </div>
      <div>
        <Collapse title="Description" content={flat.description} />
        <Collapse title="Équipements" content={flat.equipments} />
      </div>
    </section>
  )
}

export default Appartement 