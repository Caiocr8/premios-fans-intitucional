import React from 'react'
import './styles.css'

const Influencer = () => {
  return (
    <div className='flex justify-center items-center text-center flex-col w-full h-[600px] background-influencer mt-10 '>
        <h1 className=' text-2xl'>INFLUENCER</h1>
        <h1 className=' text-5xl'>SE JUNTE A NÓS</h1>
        <h1 className=' text-5xl'>E FAÇA O BEM!</h1>
        <buttton className=" mt-5 cursor-pointer flex h-10 justify-center items-center w-32 bg-[#00567b]">PARTICIPAR</buttton>
    </div>
  )
}

export default Influencer