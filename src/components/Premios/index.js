import React from 'react'

import Casa from '../../assets/img/casa-img.png'
import Carro from '../../assets/img/carro-img.png'
import Dinheiro from '../../assets/img/dinheiro-img.png'


const Premios = () => {
  return (
    <div className=' p-5 flex items-center flex-col mt-10'>
      <h1 className=' text-yellow-300 font-bold text-3xl'>CONFIRA OS PREMIOS DESSA EDIÇÃO!</h1>
      <div className=' flex row-span-3 mt-10 gap-10'>
        <div>
          <img alt='CASA' src={Casa} />
          <div className='text-center mt-5 font-bold leading-none'>
            <h1 className=' text-2xl'>CASA PRÓPRIA</h1>
            <h2>(AVALIADO EM 200 MIL REAIS)</h2>
          </div>
        </div>
        <div>
          <img alt='CARRO' src={Carro} />
          <div className='text-center mt-5 font-bold leading-none'>
            <h1 className=' text-2xl'>CARRO KWID</h1>
            <h2>(ZERO KM)</h2>
          </div>
        </div>
        <div>
          <img alt='DINHEIRO' src={Dinheiro} />
          <div className='text-center mt-5 font-bold leading-none'>
            <h1 className=' text-2xl'>PIX DE 40 MIL REAIS</h1>
          </div>
        </div>
      </div>
      <a href='https://premios.fans/'><button className=' bg-yellow-400 font-extrabold p-2 shadow-2xl mt-10 text-blue-800' >COMPRAR UM TÍTULO</button></a>
      <div className=' bg-[#203961] mt-2 w-full h-10'></div>
    </div>
  )
}

export default Premios