import React from "react";
import Banner from "../../components/banner/Banner.jsx";
import bannerHome from "../../assets/images/banner_home.png";

function Home () {
  const bannerHomeTxt = 'Chez vous, partout et ailleurs';

  return(
    <section >
    <Banner banner={bannerHome} text={bannerHomeTxt} />
    </section>
    
  )
}

export default Home;