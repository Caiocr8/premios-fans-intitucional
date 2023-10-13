import React from 'react';

import QuestionCard from '../QuestionCard';

const Questions = () => {
    return (
        <div className=' flex p-10 mb-20 justify-center items-center text-[#203961] flex-col'>
            <div className=' flex rounded-lg items-center flex-col  p-5 bg-white w-full'>
                <h1 className='font-bold text-lg'>FALE COM A NOSSA EQUIPE</h1>
                <h2>CONTATO@PREMIOSFANS.COM | (011) XXXX-XXXX</h2>
            </div>
            <div className='flex mt-10 rounded-lg flex-col p-5 bg-white w-full'>
                <div className=' items-center flex flex-col'>
                    <h1 className='font-bold text-lg'>INFORMAÇÕES SOBRE O TÍTULO</h1>
                    <h2>CONFIRA AS NOSSAS PERGUNTAS FREQUENTS PARA VER SE PODEMOS AJUDÁ-LO</h2>
                </div>
                <div>
                    <div className=' bg-[#E7E7E7] hover:bg-[#dadada]'>
                        <QuestionCard
                            question='Como faço para comprar e participar da PrêmiosFans?'
                            answer='Para comprar e participar da PrêmiosFans é super simples, é só comprar um título de capitalização nosso para concorrer aos prêmios do sorteio em vigência.'
                        />
                    </div>
                    <div className=' bg-[#E7E7E7] hover:bg-[#dadada]'>
                        <QuestionCard
                            question='Como comprar PrêmiosFans?'
                            answer='Você pode adquirir os seus títulos de capitalização através do site https://premios.fans/'
                        />
                    </div>
                    <div className=' bg-[#E7E7E7] hover:bg-[#dadada]'>
                        <QuestionCard
                            question='O PrêmiosFans é seguro?'
                            answer='SIM! Somos um Título de Capitalização de Pagamento Único na modalidade Filantropia Premiável emitidos pela CAPEMISA S/A, uma das seguradoras mais antigas e sólidas do Brasil com mais de 60 anos de existência, nossos sorteios são 100% legalizados e nossos títulos 100% aprovados de acordo com Processo SUSEP constante no Título de Capitalização.'
                        />
                    </div>
                    <div className=' bg-[#E7E7E7] hover:bg-[#dadada]'>
                        <QuestionCard
                            question='Quanto custa os Títulos da PrêmiosFans?'
                            answer='O valor dos títulos varia de acordo com a edição vigente.'
                        />
                    </div>
                    <div className=' bg-[#E7E7E7] hover:bg-[#dadada]'>
                        <QuestionCard
                            question='Os títulos da PrêmiosFans podem ser adquiridos por todas as pessoas?'
                            answer='Tendo acima de 16 anos, qualquer pessoa poderá adquirir os nossos títulos de capitalização.'
                        />
                    </div>
                    <div className=' bg-[#E7E7E7] hover:bg-[#dadada]'>
                        <QuestionCard
                            question='O que é a Plataforma PrêmiosFans?'
                            answer='Nossa história se inicia no desejo de criar uma forma de ajudar instituições filantrópicas, e se solidifica com as mudanças na forma das pessoas se comunicarem e comprarem, hoje em dia, tudo passa pela internet, e os hábitos de compra das pessoas cada vez mais tem sido influenciados pelos mundialmente conhecidos INFLUENCERS DIGITAIS, assim sendo, somos uma plataforma que disponibiliza os Títulos de Capitalização para INFLUENCERS DIGITAIS venderem nossos sorteios através de suas publicações.   
                            Nosso objetivo de mudar vidas inicia na instituição filantrópica que abraçamos, a CASA RONALD McDONALD DE APOIO À CRIANÇA COM NEOPLASIA DO RIO DE JANEIRO (AACN – RJ), e une-se a possibilidade de gerar renda para milhares de INFLUENCERS que desejam ganhar dinheiro na internet com sorteios, de forma 100% legalizada, através de suas publicações nas redes sociais. 
                            Hoje, já somos milhares de clientes, diversos influencers, e estamos inseridos em rede nacional através da RedeTV e do Apresentador João Kleber, e nosso único foco, é sermos a melhor experiência em aquisição de sorteio com apoio a instituições filantrópicas através da compra de títulos de capitalização.'

                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questions;