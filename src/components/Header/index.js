import React, { useRef } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaBars, FaTimes} from "react-icons/fa"
import './styles.css'
import Logo from '../../assets/img/logo.png'

const Header = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

 
  return (
    <>
        <header>
            <a className=' w-12' href='/'><img src={Logo} alt="Logo" /></a>
            <nav ref={navRef}>
                <ul className='nav-list'>
                    <li><a href='/about-us'> Influencers</a></li>
                    <li><a href='/about-us'> Sobre Nós</a></li>
                    <li><a href='/about-us'> Instagram</a></li>
                    <li><a href='/about-us'> Contato</a></li>
                    <li><a href='/about-us'> Cadastre-se</a></li>
                    <li><a href='/' className='search'><AiOutlineSearch size={25} /></a></li>
                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                        <FaTimes size={30}/>
                    </button>
                </ul>        
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars size={40}/>
            </button>
        </header>
    </>
  )
}

export default Header