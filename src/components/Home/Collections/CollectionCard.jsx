import React from 'react';
import bridalSet from "../../../assets/images/collections/bridal_set.jpg"

const CollectionCard = ({ title, img }) => {
    return (
        <>
            <div className={`flex justify-center items-end md:h-[257px] lg:h-[473.5px] w-full`}
                style={{ backgroundImage: `url(${img})`, backgroundSize: 'contain', backgroundRepeat: "no-repeat" }}
            >
                <h2 className=' text-[23px] pb-3 text-white'>{title}</h2>
            </div>
        </>
    )
}

export default CollectionCard