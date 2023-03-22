import React from 'react'
import {AiFillInstagram, AiFillTwitterCircle, AiFillFacebook, AiOutlineWhatsApp} from 'react-icons/ai'
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
            <button className=' hover:opacity-[0.1]'><AiFillInstagram className='ml-5'  size={30}/></button>
            <button className=' hover:opacity-[0.1]'><AiFillFacebook className='ml-5' size={30}/></button>
            <button className=' hover:opacity-[0.1]'><AiFillTwitterCircle className='ml-5' size={30}/></button>
            <button className=' hover:opacity-[0.1]'><AiOutlineWhatsApp className='ml-5' size={30}/></button>
        </div>
    </div>
  )
}

export default Footer