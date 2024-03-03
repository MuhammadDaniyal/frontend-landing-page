import React from 'react'
import SellingCard from './SellingCard';
import { bestSelling } from '../../../data/BestSelling';

const BestSellingSection = () => {
    return (
        <>
            <div className=' flex flex-col justify-center items-center gap-4 my-10'>
                {/* HEADINGS SECTION */}
                <div className=' text-center'>
                    <h2 className=' text-base text-[#BD9229]'>STUNNING DESIGN</h2>
                    <h1 className=' text-3xl text-[#404040]'>Our Best Selling</h1>
                </div>

                {/* CARDS SECTION */}
                <div className=' flex gap-4'>
                    {
                        bestSelling.map((item) => {
                            return (
                                <SellingCard {...item} />
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default BestSellingSection