import React, { useState } from "react";
import '../collapse/collapse.scss';
import arrow from '../../assets/images/arrow_back_ios-24px 2.png';

function Collapse (props) {
  const [itsOpen, setItsOpen] = useState(false);
  const handleCollapse = function() {
    setItsOpen(!itsOpen);
  };

  const collapseRules = `collapse ${itsOpen && 'content_visible'}`;
  const handleArrow = `arrow ${itsOpen ? 'arrow_down':'arrow_up'}`;

  function renderContent () {
    if (Array.isArray(props.content)) {
      return props.content.map((id, content) => <p key={id}> {content} </p>);
    } else {
      return props.content;
    }
  };
  
  return (
    <div className={collapseRules}>
      <div onClick={handleCollapse}>
        <h3 className="collapse_title">{props.title}
          <img className={handleArrow} src={arrow} alt='click_arrow'/>
        </h3>       
        <div className="collapse_content">
          {itsOpen && renderContent()}
        </div>
      </div>
    </div>
  )
}

export default Collapse