import React from 'react'
import './styles.css'

const Influencer = () => {
  return (
    <div className='flex justify-center items-center flex-col w-full h-[600px] background-influencer mt-10 '>
        <h1 className=' text-2xl'>FAÇA PARTE!</h1>
        <h1 className=' text-5xl'>SEJA UM</h1>
        <h1 className=' text-5xl'>INFLUENCER</h1>
        <buttton className=" mt-5 cursor-pointer flex h-10 justify-center items-center w-32 bg-[#00567b]">PARTICIPAR</buttton>
    </div>
  )
}

export default Influencer