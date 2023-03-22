import React from 'react'
import Woman from '../../assets/img/woman.png'
import Retangulo1 from '../../assets/img/retangulo1.png'
import PremiosFansFt from '../../assets/img/premios-fans.png'

const PremiosFans = () => {
  return (
    <div className='flex items-center justify-center mt-10'>
        <div>
            <div className='flex'>
                <img src={PremiosFansFt} alt="PREMIOS FANS" />
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
  )
}

export default PremiosFans