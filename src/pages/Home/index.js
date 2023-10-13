import React, { useRef } from 'react';
import { Link, Element, scroller } from 'react-scroll';
import { FaBars, FaTimes } from "react-icons/fa"
import Logo from '../../assets/img/logo.png'
import './styles.css'

// COMPONENTES
import PremiosFans from '../../components/PremiosFans';
import Footer from '../../components/Footer';
import FazoBem from '../../components/FazoBem';
import Instituto from '../../components/Instituto';
import Premios from '../../components/Premios';
import PremiosFansBottom from '../../components/PremiosFansBottom';
import YellowGirl from '../../components/YellowGirl';
import Cadastrar from '../../components/Cadastrar';
import Suporte from '../../components/Suporte';
import Questions from '../../components/Questions';


const Home = () => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  const scrollToComponent = (componentName) => {
    scroller.scrollTo(componentName, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div>
      <header>
        <a className=' ' href='/'><img src={Logo} alt="Logo" /></a>
        <nav ref={navRef}>
          <ul className='nav-list flex justify-around gap-10 font-bold text-lg'>
            <li><Link className=' cursor-pointer' to="sorteio" onClick={() => scrollToComponent("sorteio")}> SORTEIO</Link></li>
            <li><Link className=' cursor-pointer' to="instituto" onClick={() => scrollToComponent("instituto")}> INSTITUIÇÃO BENEFICIADA</Link></li>
            <li><Link className=' cursor-pointer' to="influencer" onClick={() => scrollToComponent("influencer")}> INFLUENCER</Link></li>
            <li><a href='https://wa.me/message/QB3QKV2LJDFRE1'> CONTATO</a></li>
            <li><a href='https://premios.fans/'><button className=' bg-yellow-400 font-extrabold p-2 shadow-2xl text-blue-800' >QUERO UM TÍTULO</button></a></li>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <FaTimes size={30} />
            </button>
          </ul>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars size={40} />
        </button>
      </header>
      <main>
        <div>
          <PremiosFans />
        </div>
        <div>
          <PremiosFansBottom />
        </div>
        <Element name='sorteio'>
          <Premios />
        </Element>
        <div>
          <FazoBem />
        </div>
        <Element name='instituto'>
          <Instituto />
        </Element>
        <Element name='influencer'>
          <YellowGirl />
        </Element>
        <div>
          <Cadastrar />
        </div>
        <div>
          <Suporte />
        </div>
        <div>
          <Questions />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home