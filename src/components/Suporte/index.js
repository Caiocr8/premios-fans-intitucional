import React from 'react'
import Headset from '../../assets/img/headset.png'
import InfTitulo from '../../assets/img/inf-titulo.png'

import './styles.css';


const Suporte = () => {
  return (
    <div className='bg-[#203961] w-full flex p-10 justify-around flex-col items-center mobile-version-suporte'>
        <h1 className=' font-bold text-5xl'>SE PRECISAR,</h1>
        <h2 className=' text-lg'>ENTRE EM CONTATO COM O NOSSO SUPORTE.</h2>
        <div className=' flex gap-32 p-10 mobile-version-suporte'>
            <a href='https://wa.me/message/QB3QKV2LJDFRE1'>
                <button className='p-5 rounded-lg bg-[#FEFFFE] text-[#203961] flex gap-3 items-center'>
                    <img alt='HEADSET' src={Headset}/>
                    <div className=' leading-none text-start'>
                        <h1 className='font-bold'>FALE COM A NOSSA EQUIPE</h1>
                        <h2 className='text-sm font-medium'>Ligue para a gente ou envie um e-mail</h2>
                    </div>
                </button>
            </a>
            <div className='p-5 rounded-lg bg-[#FEFFFE] text-[#203961]'>
                <div className='mobile-version-suporte-inf flex gap-3'>
                    <img className='img-mobile' alt='LOGO PREMIOS FANS iCONE' src={InfTitulo}/>
                    <div className='leading-tight'>
                        <h1 className='font-bold'>INFORMAÇÕES SOBRE O TÍTULO</h1>
                        <h2 className='font-medium'>Confira as nossas perguntas frequentes</h2>
                        <h2 className='font-medium'>para ver se podemos ajudá-lo</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Suporte