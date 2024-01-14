import React, { useState } from "react";
import '../collapse/collapse.scss';
import arrow from '../../assets/images/arrow_back_ios-24px 2.png';


function Collapse () {
  const [itsOpen, setItsOpen] = useState(false);

  return (
    <div>
      <div onClick={()=>setItsOpen(!itsOpen)} />
      <img src={arrow} alt='arrow-logo'/> 
    </div>
  )
}

export default Collapse