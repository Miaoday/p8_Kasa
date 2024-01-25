import React from "react";
import { useParams } from "react-router-dom";
import data from '../../components/data/appartements.json';
import Error from '../../pages/error/Error';
import Carrousel from '../../components/slides/Slides';
import '../appartements/appartement.scss';

function Appartement () {

  const { id } = useParams();
  const logementId = data.find(appartements=> appartements.id ===id);

    if (!logementId) {
      return (<Error/>)
    }

    return (
      <section>
        <div>
          <Carrousel pictures={logementId.pictures} />
          <div>
            {}
          </div>
        </div>
        
      </section>
    )
}

export default Appartement 