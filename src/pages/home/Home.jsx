import React from "react";
import Banner from "../../components/banner/Banner.jsx";
import bannerHome from "../../assets/images/banner_home.png";
import Card from "../../components/card/Card.jsx";
import Collection from "../../components/collection/Collection.jsx";

function Home () {
  const bannerHomeTxt = 'Chez vous, partout et ailleurs';

  return(
    <section >
    <Banner banner={bannerHome} text={bannerHomeTxt} />
    <Card/>
    <Collection />
    </section>

  )
}

export default Home