import React from "react";
import Banner from "../../components/banner/Bannerr.jsx";
import bannerHome from "../../assets/images/banner_home.png";
import Collection from "../../components/collection/Collection.jsx";

function Home () {
  const bannerHomeTxt = 'Chez vous, partout et ailleurs';

  return(
    <section >
    <Banner banner={bannerHome} text={bannerHomeTxt} />
    <Collection />
    </section>

  )
}

export default Home