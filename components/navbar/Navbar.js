import React, { useState } from 'react'
import {AiOutlineHome, AiOutlineMenu, AiOutlineLogin} from 'react-icons/ai'
import {MdOutlineLocalMall, MdOutlineLocalGroceryStore} from 'react-icons/md'
import Link from 'next/link'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <div className='fixed w-full flex flex-row  justify-center bottom-6 md:block md:w-auto md:bottom-auto md:top-[25%] md:left-4 '>

      <Link href='/shop' className='flex my-4 justify-center  items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:cursor-pointer hover:scale-110 ease-in duration-300 '>
      <AiOutlineHome size={20}/>
      </Link>
      <Link href='shop' className=' flex my-4 justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:cursor-pointer hover:scale-110 ease-in duration-300 '>
      <MdOutlineLocalMall size={20}/>
      </Link>
      {isLoggedIn? (<div>
        <Link href='/shop' className=' flex my-4 justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:cursor-pointer hover:scale-110 ease-in duration-300 '>
      <MdOutlineLocalGroceryStore size={20}/>
      </Link>
      </div>)
      :
      (<div></div>)
       }

      <Link href='/shop' className=' flex my-4 justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:cursor-pointer hover:scale-110 ease-in duration-300 '>
      <AiOutlineLogin size={20}/>
      </Link>
    </div>


  )
}

export default Navbar