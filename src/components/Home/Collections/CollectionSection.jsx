import React from 'react'
import CollectionCard from './CollectionCard';
import { Collections } from '../../../data/Collections';

const CollectionSection = () => {
    return (
        <div className=' flex flex-col gap-4 my-10'>
            {/* HEADINGS SECTION */}
            <div className=' text-center'>
                <h2 className=' text-base text-[#BD9229]'>ATTRACTIVE JEWELLERY</h2>
                <h1 className=' text-3xl text-[#404040]'>Gorgeous Collections</h1>
            </div>

            {/* CARDS SECTION */}
            <div className=' grid grid-cols-3'>
                {
                    Collections.map((item, i) => {
                        return (
                            <CollectionCard {...item} />
                        )
                    })
                }

            </div>

        </div>
    )
}

export default CollectionSection