import React from 'react'
import MeninoAmarelo from '../../assets/img/menino-amarelo.png'
import './styles.css'

const ManYellow = () => {
  return (
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
  )
}

export default ManYellow