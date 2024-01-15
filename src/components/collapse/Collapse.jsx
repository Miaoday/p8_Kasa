import React, { useState } from "react";
import '../collapse/collapse.scss';
import arrow from '../../assets/images/arrow_back_ios-24px 2.png';

function Collapse ({title, content}) {
  const [itsOpen, setItsOpen] = useState(false);

  const handleCollapse = function() {
    setItsOpen(!itsOpen);
  };

  return (
    <div>
      <div onClick={handleCollapse}>
        <img src={arrow} alt='arrow-logo'/> 
        <h3>{title}</h3>
        <div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default Collapse