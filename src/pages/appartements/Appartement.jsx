import React from "react";
import { useParams } from "react-router-dom";
import data from '../../components/data/appartements.json';
import Error from '../../pages/error/Error';
import Slides from '../../components/slides/Slides';
import Rating from '../../components/rating/Rating';
import Collapse from "../../components/collapse/Collapse";
import '../appartements/appartement.scss';

function Appartement () {
  const { id } = useParams();
  const flat = data.find(appartements=> appartements.id ===id);
  if (!flat) {return (<Error/>)}

  return (
    <section className="flat">
      <div className="flat_slides">
        <Slides pictures={flat.pictures} title={flat.title} />
      </div>
      <div className="flat_content">
          <div className="flat_description">
          <h4 className="flat_title">{flat.title}</h4>
          <p className="flat_location">{flat.location}</p>  
          <div className="flat_tagsBox">
            {flat.tags.map((tags,index)=>{
              return(
                <span className="flat_tag" key={index}>{tags}</span>
              )})
            }   
          </div>                 
          </div>
          <div className="flat_profile">
          <Rating rating={flat.rating}/>
          <div className="flat_host">
            <p className="flat_host_name">{flat.host.name}</p>
            <img className="flat_host_photo" src={flat.host.picture} alt={flat.host.name}/>
          </div>          
          </div>
      </div>      
      <div className="flat_collapse">   
          <Collapse contentClass="flat_collapse_txt" title="Description" content={flat.description} />    
          <Collapse contentClass="flat_collapse_txt" title="Équipements" content={flat.equipments} />    
      </div>
    </section>
  )
}

export default Appartement 