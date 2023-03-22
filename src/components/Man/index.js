import React from 'react'
import ManFt from '../../assets/img/man.png'


const Man = () => {
  return (
    <div className='flex justify-center'>
        <div>
            <img src={ManFt} alt="Man"/>
            <div className=' w-3/5 h-5 bg-[#009acd]'></div>
        </div>  
    </div>
  )
}

export default Man