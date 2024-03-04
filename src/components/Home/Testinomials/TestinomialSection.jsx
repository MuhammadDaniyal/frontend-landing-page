import React from 'react';
import arrowLeft from "../../../assets/Svgs/arrowLeft.svg";
import arrowRight from "../../../assets/Svgs/arrowRight.svg";
import Star from "../../../assets/Svgs/star.svg";

const TestinomialSection = () => {
    return (
        <>
            <div className=' flex flex-col justify-center items-center gap-3 bg-[#FEF5E5] w-full h-[500px] mt-16'>

                {/* MAIN HEADING */}
                <div>
                    <h3 className=' text-xl uppercase text-center font-medium text-primaryColor'>Testinomials</h3>
                </div>

                {/* 2nd DIV */}
                <div className=' flex justify-between items-center w-full px-5'>

                    {/* LEFT ARROW */}
                    <div className=' rounded-[50%] p-4 border border-black'>
                        <img src={arrowLeft} alt="" className=' w-8 h-8' />
                    </div>

                    {/* FEEDBACK DIV */}
                    <div className=' text-center'>
                        <div className=' flex flex-col gap-3'>
                            <h3 className=' capitalize text-4xl font-normal'>positive client feedback</h3>
                            <p className=' w-[400px] leading-8 text-base'>Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Turpis cursus in hac habitasse. At consectetur lorem donec mass molestie ac.</p>
                        </div>

                        {/* NAME & STARS */}
                        <div className=' flex flex-col gap-3 justify-center items-center mt-10'>
                            <div>
                                <h3>Kuttan Dev</h3>
                                <h2>General Manager</h2>
                            </div>

                            {/* STARS */}
                            <div className=' flex gap-2'>
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                            </div>

                        </div>

                    </div>

                    {/* RIGHT ARROW */}
                    <div className=' rounded-[50%] p-4 border border-black'>
                        <img src={arrowRight} alt="" className=' w-8 h-8' />
                    </div>

                </div>

            </div>
        </>
    )
}

export default TestinomialSection