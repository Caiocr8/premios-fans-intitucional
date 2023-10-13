import React from 'react'
import HomeLogo from '../../assets/img/home-logo.png'
import HomeImg from '../../assets/img/home-img.png'
import PremiosFansImg from '../../assets/img/premios-fans.png'



import './styles.css'

const PremiosFans = () => {
  return (
    <>
      <div className='p-5'>
        <div className='flex flex-row justify-evenly mobile-version-container mt-36'>
          <div className=''>
            <img alt='HOME LOGO' src={HomeLogo} />
            <img alt='Premios Fans Imagem' src={PremiosFansImg} />
          </div>
          <div>
            <img alt='HOME IMAGEM' src={HomeImg} />
          </div>
        </div>
      </div>

    </>
  )
}

export default PremiosFans