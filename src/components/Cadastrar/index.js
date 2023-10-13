import React from 'react'
import BonecoCoin from '../../assets/img/boneco-coin.png';
import './styles.css'

const Cadastrar = () => {
  return (
    <div className='flex p-10 justify-center mobile-version-cadastro'>
        <div>
           <img alt='BONECO COIN' src={BonecoCoin}/>
        </div>
        <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-4xl'>Ganhar dinheiro na internet nunca foi tão fácil!</h1>
            <div className='font-bold mt-5 text-lg'>
                <h2>A PrêmiosFans é uma proposta inovadora que traz um formato 100%</h2>
                <h2>legalizado para o mercado de SORTEIOS.</h2>
            </div>
            <div className='font-bold text-lg mt-5'>
                <h2>Cadastre-se em nossa plataforma com os seus dados, e terá acesso</h2>
                <h2>a um LINK exclusivo. Ao divulgar esse link e seus clientes realizarem</h2>
                <h2>compras, você poderá acompanhar ONLINE todas as suas vendas.</h2>
            </div>
            <div className='flex justify-center mt-10'>
                <a href='http://premios.rds.land/premios-fans-como-ganhar'>
                    <button className=' ring p-5 rounded-full text-2xl font-bold ring-white' >CADASTRE-SE AGORA!</button>
                </a>
            </div>
        </div>      
    </div>
  )
}

export default Cadastrar