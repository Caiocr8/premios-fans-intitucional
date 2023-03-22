import React from 'react';
import Header from '../../components/Header';
import Woman from '../../assets/img/woman.png'
import Man from '../../assets/img/man.png'
import Retangulo1 from '../../assets/img/retangulo1.png'
import FazoBem from '../../assets/img/faz-o-bem.png'
import Instituto from '../../assets/img/instituto_.png'
import Premios from '../../assets/img/premios.png'
import MeninoAmarelo from '../../assets/img/menino-amarelo.png'
import {AiFillInstagram, AiFillTwitterCircle, AiFillFacebook} from 'react-icons/ai'
import "../../fonts/ArtGalleria.ttf";
import './styles.css';
import PremiosFans from '../../assets/img/premios-fans.png'
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div>
        <Header />
        <main>
          <div className='flex items-center justify-center mt-10'>
            <div>
              <div className='flex'>
                <img src={PremiosFans} alt="PREMIOS FANS" />
              </div>
              <div className='-rotate-3 text-center font-bold text-[22px]'>
                <h1>A PRIMEIRA PLATAFORMA DE SORTEIOS COM</h1>
                <h1>INFLUENCERS DE FORMA 100% LEGALIZADA!</h1>
              </div>
            </div>
            <div>
              <img className='' src={Woman} alt="WOMAN"/>
              <img src={Retangulo1} alt='retangulo' />
            </div>
          </div>
          <div className='flex justify-center'>
            <div>
              <img src={Man} alt="Man"/>
              <div className=' w-3/5 h-5 bg-[#009acd]'></div>
            </div>
            <div className='flex items-center mt-32'>
              <button><a href='/'><AiFillInstagram  size={30}/></a></button>
              <button><a href='/'><AiFillFacebook className='ml-5' size={30}/></a></button>
              <button><a href='/'><AiFillTwitterCircle className='ml-5' size={30}/></a></button>
            </div>          
          </div>
          <div className=' flex justify-center mt-10'>
            <img src={FazoBem} alt='Faz o bem' />
          </div>
          <div className=' flex justify-center mt-10'>
            <img alt='Instituto' src={Instituto} />
          </div>
          <div className=' flex justify-center mt-10'> 
            <img alt='Premios' src={Premios} />
          </div>
          <div className='flex items-center justify-center mobile-version mt-10'>
            <img className='imagem-menino-amarelo' src={MeninoAmarelo} alt="Menino de Amarelo"/>
            <div className=' ml-5'>
              <h1 className=' font-bold text-5xl'>1 TÍTULO</h1>
              <h1 className=' font-bold text-5xl'>22 CHANCES</h1>
              <p>POR APENAS R$ 29,99 VC CONCORRE</p>
              <p>A 22 CHANCES DE GANHAR ATÉ R$ 250 MIL</p>
              <p>EM PRÊMIOS!</p>
            </div>
          </div>
          <div className='flex justify-center items-center flex-col w-full h-[400px] bg-yellow-400 mt-10 '>
            <h1 className=' text-2xl'>FAÇA PARTE!</h1>
            <h1 className=' text-5xl'>SEJA UM</h1>
            <h1 className=' text-5xl'>INFLUENCER</h1>
            <buttton className=" mt-5 cursor-pointer flex h-10 justify-center items-center w-32 bg-[#00567b]">PARTICIPAR</buttton>
          </div>
        </main>
        <Footer />
    </div>
  )
}

export default Home