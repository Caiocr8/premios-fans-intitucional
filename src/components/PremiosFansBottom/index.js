import React from 'react'
import Fatura from '../../assets/img/fatura-img.png'
import DedosCruzados from '../../assets/img/dedos-cruzados.png'
import Tickets from '../../assets/img/park-tickets-couple.png'
import './styles.css'

const PremiosFansBottom = () => {
  return (
    <div className='flex row-span-3 justify-center mobile-version-container-back items-center gap-48 bg-[#203961] p-10'>
        <div className=' bg-[#294A82] w-96 justify-between mobile-version-container-little flex row-span-2 items-center rounded-xl p-10'>
          <div className=' flex row-span-2 flex-row leading-tight'>
            <div className=' bg-yellow-400 h-14 mt-5 w-1'></div>
            <div className=' ml-2'>
              <h1 className='font-bold'>COMPRE</h1>
              <h1 className='font-bold'>QUANTOS</h1>
              <h1 className='font-bold'>TÍTULOS</h1>
              <h1 className='font-bold'>QUISER</h1>
            </div>
          </div>     
          <img alt='TIKETS' src={Tickets}/>    
        </div>
        <div className=' bg-[#294A82] w-96 justify-between mobile-version-container-little flex row-span-2 items-center rounded-xl p-10'>
          <div className=' flex row-span-2 flex-row gap-3 leading-tight'>
            <div className=' bg-yellow-400 h-14 mt-5 w-1'></div>
            <div className=' ml-2'>
              <h1 className='font-bold'>PAGUE</h1>
              <h1 className='font-bold'>NO PIX</h1>
            </div>
          </div>    
          <img alt='FATURA' src={Fatura}/>        
        </div>
        <div className=' bg-[#294A82] w-96 justify-between mobile-version-container-little flex row-span-2 items-center rounded-xl p-10'>
          <div className=' flex row-span-2 flex-row gap-3 leading-tight'>
            <div className=' bg-yellow-400 h-14 mt-5 w-1'></div>
            <div className=' ml-2'>
              <h1 className='font-bold'>CRUZE OS</h1>
              <h1 className='font-bold'>DEDOS E</h1>
              <h1 className='font-bold'>TORÇA PARA</h1>
              <h1 className='font-bold'>GANHAR</h1>
            </div>
          </div>        
          <img alt='DEDOS CRUZADOS' src={DedosCruzados}/>        
        </div>
      </div>
  )
}

export default PremiosFansBottom