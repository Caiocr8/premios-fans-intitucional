import React from 'react';

// COMPONENTES
import Man from '../../components/Man';
import Header from '../../components/Header';
import PremiosFans from '../../components/PremiosFans';
import Footer from '../../components/Footer';
import FazoBem from '../../components/FazoBem';
import Instituto from '../../components/Instituto';
import Premios from '../../components/Premios';
import ManYellow from '../../components/ManYellow';
import Influencer from '../../components/Influencer';

const Home = () => {
  return (
    <div>
        <Header />
        <main>
          <PremiosFans />
          <Man />
          <FazoBem />
          <Instituto />
          <Premios />
          <ManYellow />
          <Influencer />
        </main>
        <Footer />
    </div>
  )
}

export default Home