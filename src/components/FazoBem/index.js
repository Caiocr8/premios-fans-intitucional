import React from 'react'
import FazoBemFt from '../../assets/img/faz-o-bem.png'
import Capemisa from '../../assets/img/capemisa.jpeg'
import './styles.css'

const FazoBem = () => {
  return (
    <div className='mobile-version flex justify-center items-center gap-10 p-10'>
        <div>
          <img src={FazoBemFt} alt='Faz o bem' />
        </div>      
        <div className=' '>
          <h1 className=' leading-[3rem] text-6xl'>Fazer o bem,</h1>
          <h2 className=' leading-[3rem] text-6xl font-extrabold mb-5'>faz bem</h2>
          <p className=' leading-5 text-lg font-bold'>Nós temos como uma das metas ajudar</p>
          <p className=' leading-5 text-lg font-bold'>outras pessoas por isso, parte do</p>
          <p className=' leading-5 text-lg font-bold'>valor arrecadado será doado como</p>
          <p className=' leading-5 text-lg font-bold'>contribuição a Casa Ronald McDonald</p>
          <img className=' w-[250px] mt-5 ml-[45px]' src={Capemisa} alt='Capemisa' />
        </div>
    </div>
  )
}

export default FazoBem