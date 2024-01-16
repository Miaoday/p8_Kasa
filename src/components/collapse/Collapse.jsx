import React, { useState } from "react";
import '../collapse/collapse.scss';
import arrow from '../../assets/images/arrow_back_ios-24px 2.png';

function Collapse (props) {
  const [itsOpen, setItsOpen] = useState(false);
  const handleCollapse = function() {
    setItsOpen(!itsOpen);
  };
  const collapseRules = `collapse ${itsOpen && 'visible'}`;
  const handleArrow = `arrow ${itsOpen ? 'arrow_down':'arrow_up'}`;
  
  return (
    <div className={collapseRules}>
      <div>
        <h3 onClick={handleCollapse} className="collapse_title">{props.title}
          <img className={handleArrow} src={arrow} alt='click_arrow'/>
        </h3>   
        {itsOpen && ( <div className="collapse_content">
          {Array.isArray(props.content) 
          ? (props.content.map((id, content) => <p key={id}> {content} </p>)) 
          : (props.content)}
          </div>
        )}    
      </div>
    </div>
  );
}
export default Collapse