import React from 'react'
import GirlYellow from '../../assets/img/img-mulher.png'
import LogoPremiosfans from '../../assets/img/logo-premiosfans.png'
import Click from '../../assets/img/click.png'
import './styles.css'

const yellowGirl = () => {
  return (
    <div className='background-influencer mobile-version-main flex-wrap flex flex-col items-center p-5'>
      <div className='flex gap-8 mobile-version-main'>
        <div>
          <img alt='FOTO MULHER DE AMARELO' src={GirlYellow} />
        </div>
        <div className='flex flex-col gap-60'>
          <div>
            <img alt='LOGO PREMIOS FANS' src={LogoPremiosfans} />
          </div>
          <div>
            <div className=' font-bold text-3xl'>
              <h1>A PRIMEIRA PLATAFORMA</h1>
              <h1>DE SORTEIOS COM</h1>
              <h1>INFLUENCERS DE FORMA</h1>
              <h1>100% LEGALIZADA</h1>
            </div>
            <a href='http://premios.rds.land/premios-fans-como-ganhar'><button className=' bg-yellow-400 font-extrabold p-1 mt-2 -rotate-1 shadow-2xl text-blue-800' >SAIBA COMO FAZER PARTE!</button></a>
          </div>
        </div>
      </div>
      <div className='p-10 rounded-2xl flex lg:divide-x-4 mobile-version-main mobile-version-divide justify-evenly divide-yellow-400 items-center  bg-[#4372A4] w-4/6 h-3/5'>
        <div className='font-bold lg:text-xl'>
          <h1>SIGA OS 4 PASSOS</h1>
          <h1>E GARANTA UMA</h1>
          <h1>RENDA EXTRA!</h1>
        </div>
        <div className='leading-none pl-5'>
          <div className=' mobile-version-margin'>
            <div className='flex mobile-version-main-back'>
              <h1 className=' font-bold text-lg'>PASSO 1</h1>
              <img alt='CLICK' src={Click} />
            </div>
            <div>
              <h1 className='font-bold text-yellow-400'>CADASTRE-SE</h1>
            </div>
          </div>
          <div className=' mobile-version-margin'>
            <div className='flex mt-2 mobile-version-main-back'>
              <h1 className='font-bold text-lg'>PASSO 2</h1>
              <img alt='CLICK' src={Click} />
            </div>
            <div className='text-yellow-400 font-bold'>
              <h1>ACOMPANHE</h1>
              <h1>SEUS RESULTADOS</h1>
            </div>
          </div>
        </div>
        <div className='pl-5 mobile-version-margin'>
          <div className='leading-tight font-bold'>
            <h1 className='text-lg'>PASSO 3</h1>
            <h1 className='text-yellow-400'>TRANSFORME SEUS</h1>
            <h1 className='text-yellow-400'>SEGUIDORES</h1>
            <h1 className='text-yellow-400'>EM AFILIADOS</h1>
          </div>
        </div>
        <div className='pl-5 mobile-version-margin'>
          <div className='flex mobile-version-main-back'>
            <h1 className='font-bold text-lg'>PASSO 4</h1>
            <img alt='CLICK' src={Click} />
          </div>
          <div>
            <h1 className='font-bold text-yellow-400'>GANHE DINHEIRO</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default yellowGirl