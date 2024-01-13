import React from "react";
import Banner from "../../components/banner/Bannerr";
import './about.scss';
import bannerAbout from "../../assets/images/banner_about.png"

function About () {
  return(
    <div>
        <Banner banner={bannerAbout} />
        <h3>Fiabilité aa</h3>        
    </div>
  )
}
export default About