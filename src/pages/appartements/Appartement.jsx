import React from "react";
import { useParams } from "react-router-dom";
import data from '../../components/data/appartements.json';
import Error from '../../pages/error/Error';
import Slides from '../../components/slides/Slides';
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
            
          </div>
        </div>
        
      </section>
    )
}

export default Appartement 