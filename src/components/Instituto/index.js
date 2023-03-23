import React from 'react'
// import InstitutoFt from '../../assets/img/instituto_.png'
import InstitutoftLogo from '../../assets/img/instituto-ft.png' 
import FotoChild from '../../assets/img/foto-crianças.png'
import './styles.css'

const Instituto = () => {
  return (
    <div className='p-5 mt-10 flex justify-center mobile-version-div-container'>
        <div className=' mt-5'>
          <img className=' w-[320px]' alt='LOGO INSTITUTO' src={InstitutoftLogo} />
          <div className=' mt-11'>
            <p>O Instituto Ronald MacDonald</p>
            <p>é uma organização sem fins</p>
            <p>lucrativos, que atua para aproximar</p>
            <p>famílias da cura do câncer infanto juvenil.</p>   
          </div>
          <div className='mt-16'>
            <p>Através de doações, ajuda de voluntários, programas de acolhimento</p>
            <p>e treinamento profissional, o Instituto tem ajudado milhares de crianças</p>
            <p>e adolescentes a se aproximarem da cura do câncer</p>
          </div>    
        </div>
        <div className='p-5'>
          <div className='flex justify-center'>
            <button className='bg-[#efc23b] text-[#007fb9] font-bold rounded-full hover:bg-yellow-600 w-56 h-10 text-2xl mb-5'><a href='https://casaronald.org.br/'>ACESSE O SITE</a></button>
          </div>
          <img  alt='FOTO CRIANÇAS' src={FotoChild}/>
        </div>
    </div>
  )
}

export default Instituto