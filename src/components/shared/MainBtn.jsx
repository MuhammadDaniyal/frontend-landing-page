import React from 'react'

const MainBtn = () => {
    return (
        <>
            <button className=' rounded-3xl text-center bg-[#fff] px-[90px] py-[13px] text-primaryColor text-xl hover:text-[#fff] hover:bg-[#BD9229] transition-all duration-300 ease-in-out group'>
                <span className='transform translate-y-[8] transition duration-300 ease-in-out group-hover:translate-y-[200px]'>
                    View All
                </span>
            </button>
        </>
    )
}

export default MainBtn