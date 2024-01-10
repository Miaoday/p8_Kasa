import React from "react";

import Banner from "../../components/banner/Banner.jsx";
import bannerHome from "../../assets/images/banner_home.png";

function Home () {
  return(
    <section >
    <Banner banner={bannerHome} text='Chez vous, partout et ailleurs' />
    </section>
  )
}

export default Home;