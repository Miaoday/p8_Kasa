import React from "react";

import Banner from "../../components/banner/Banner.jsx";
import bannerHome from "../../assets/images/banner_home.png";

function Home () {
  return(
    <div>
    <Banner banner={bannerHome} text='Chez vous, partout et ailleurs' />
    </div>
  )
}

export default Home;