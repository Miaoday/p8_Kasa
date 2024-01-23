import React from "react";
import { useParams } from "react-router-dom";
import data from '../../components/data/appartements.json';
import Error from '../../pages/error/Error';
import Carrousel from '../../components/slides/Slides';

function Appartement () {
  const {id} = useParams
  const logementId = data.find(function appartements(){
    return appartements.id===id;
    });

    if (!logementId) {
      return (<Error/>)
    }

    return (
      <div>
        <Carrousel/>
      </div>
    )
}

export default Appartement 