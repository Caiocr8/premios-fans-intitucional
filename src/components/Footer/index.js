import React from 'react'
import {AiFillInstagram, AiOutlineWhatsApp} from 'react-icons/ai'
import './styles.css'

const Footer = () => {
  return (
    <div className='bg-[#00567b] p-5 w-full flex justify-around items-center mobile-footer'>
        <div className='flex flex-col'>
            <h1 className=' font-bold'>Quem somos</h1>
            <a href='/' className='cursor-pointer'>Nosso propósito</a>
            <a href='/' className='cursor-pointer'>Seja um influencer</a>
        </div>
        <div className='flex flex-col'>
            <h1 className=' font-bold'>Termos de Uso</h1>
            <a href='/' className='cursor-pointer'>Declarações da plataforma</a>
            <a href='/' className='cursor-pointer'>Ajuda e pagamento</a>
        </div>
        <div>
            <button className='hover:opacity-[0.1]'><a href='https://instagram.com/premiosfans?igshid=Mzc1MmZhNjY='><AiFillInstagram className='ml-5'  size={30}/></a></button>
            <button className='hover:opacity-[0.1]'><AiOutlineWhatsApp className='ml-5' size={30}/></button>
        </div>
    </div>
  )
}

export default Footer