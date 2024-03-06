import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const data = [
  {
    id: 1,
    title: "get in touch with us",
    sublinks: ["Phone: +394304095209", "Support@Company.Com"]
  },
  {
    id: 2,
    title: "information",
    sublinks: ["About Us", "Our Products", "Our Products", "Privacy Policy"]
  },
  {
    id: 3,
    title: "our resources",
    sublinks: ["Plan And Pricing", "Client Business", "Sales & Purchase", "Product Quality"]
  },
]

const Footer = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]);
  const [id, setId] = useState();
  const [links, setLinks] = useState();


  const handleOpen = (id) => {
    let newOpenDropDown = [];
    newOpenDropDown = isOpen.map((item, i) => {
      return item.id === id ? !isOpen[id - 1] : false;
    });
    setIsOpen(newOpenDropDown);
  }

  useEffect(() => {
    const show = data.filter((item) => item.id === id);
    console.log(show)
    setLinks(show[0]?.sublinks)

  }, [id])

  return (
    <>
      <div className=' flex flex-col gap-5 bg-[#614605] py-10 md:py-4'>

        {/* MOBILE */}

        <div className=' flex flex-col gap-5 md:hidden px-3'>

          <div className=' flex justify-start items-center gap-3 text-white'>
            <h3 className=' capitalize'>follow us:</h3>
            <div className=' flex gap-3'>
              <div className=' rounded-[50%] p-2 bg-white'>
                <FaFacebookF className='text-primaryColor' />
              </div>
              <div className=' rounded-[50%] p-2 bg-white'>
                <FaTwitter className='text-primaryColor' />
              </div>
              <div className=' rounded-[50%] p-2 bg-white'>
                <FaInstagram className='text-primaryColor' />
              </div>
            </div>
          </div>

          <div className=' flex flex-col gap-4'>

            {
              data.map((item, i) => (
                <>
                  <div className=' flex justify-between text-[#E5E5E5]'>
                    <p className=' capitalize text-[19px]'>{item.title}</p>
                    <FaPlus className=' text-2xl text-[#E5E5E5]'
                      onClick={() => {
                        setId(item.id)
                        handleOpen(item.id)
                      }} />
                  </div>
                  {isOpen && links && (item.id === id) && <div>
                    <ul className=' flex flex-col gap-2 text-[#E5E5E5]'>
                      {
                        links && links.map((item, i) => (
                          <li className=' text-sm'>{item}</li>
                        ))
                      }
                    </ul>
                  </div>}
                </>
              ))
            }

            <div className=' flex justify-between text-white'>
              <p className=' capitalize text-[19px]'>about us</p>
            </div>

          </div>

        </div>


        {/* DESKTOP */}

        {/* first div */}
        <div className=' hidden md:flex gap-40 text-white pl-16 pt-10'>

          {/* 1st */}
          <div className=' flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
              <div>
                <h3 className='text-lg uppercase font-semibold'>get in  touch with us</h3>
                <hr className='w-12 my-1 rounded-lg' style={{ border: "3px solid #BD9229" }} />
              </div>
              <div className=' flex flex-col gap-3 capitalize text-[#E5E5E5]'>
                <p>Phone: +394304095209</p>
                <p>support@company.com</p>
              </div>
            </div>
            <div className=' flex justify-start items-center gap-3 ml-[-20px]'>
              <h3 className=' capitalize'>follow us:</h3>
              <div className=' flex gap-3'>
                <div className=' rounded-[50%] p-2 bg-white'>
                  <FaFacebookF className='text-primaryColor' />
                </div>
                <div className=' rounded-[50%] p-2 bg-white'>
                  <FaTwitter className='text-primaryColor' />
                </div>
                <div className=' rounded-[50%] p-2 bg-white'>
                  <FaInstagram className='text-primaryColor' />
                </div>
              </div>
            </div>
          </div>

          {/* 2nd */}
          <div className=' flex flex-col gap-3'>
            <div>
              <h3 className='text-lg uppercase font-semibold'>information</h3>
              <hr className='w-12 my-1 rounded-lg' style={{ border: "3px solid #BD9229" }} />
            </div>
            <div className=' flex flex-col gap-3 capitalize text-[#E5E5E5]'>
              <p>about us</p>
              <p>our products</p>
              <p>terms & conditions</p>
              <p>privacy policy</p>
            </div>
          </div>

          {/* 3rd */}
          <div className=' flex flex-col gap-3'>
            <div>
              <h3 className='text-lg uppercase font-semibold'>our resources</h3>
              <hr className='w-12 my-1 rounded-lg' style={{ border: "3px solid #BD9229" }} />
            </div>
            <div className=' flex flex-col gap-3 capitalize text-[#E5E5E5]'>
              <p>plan and pricing</p>
              <p>client business</p>
              <p>sales & purchase</p>
              <p>product quality</p>
            </div>
          </div>

        </div>

        {/* second div (same for both) */}
        <div className='flex flex-col gap-3 justify-center items-start'>
          <hr className=' w-full text-[#707070]' />
          <div className=' pl-10'>
            <h3 className=' capitalize text-lg text-[#E5E5E5]'>designed by WebCraftio</h3>
          </div>

        </div>

      </div>
    </>
  )
}

export default Footer