import React from "react";
import Banner from "../../components/banner/Banner";
import Collapse from "../../components/collapse/Collapse";
import './about.scss';
import bannerAbout from "../../assets/images/banner_about.png"
import aboutData from "../../components/data/about.js";

function About () {
  return(
    <div>
      <Banner banner={bannerAbout} />    
      <div className="collapse_section">
      {aboutData.map(function(data){
        return(
            <Collapse key={data.id} title={data.title} content={data.content} / >           
        )   
        })} 
      </div> 
    </div>                    
  )
}
export default About