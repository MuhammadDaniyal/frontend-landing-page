import React from 'react';
import Chain from '../../../assets/images/selling/chain.jpg'

const SellingCard = ({ img, title }) => {
    return (
        <div className='flex flex-col gap-2 justify-center items-center'>
            <img src={img} alt="" className=' w-60 h-60' />
            <h2 className=' text-lg'>{title}</h2>
            <span className=' text-base'>FROM</span>

        </div>
    )
}

export default SellingCard