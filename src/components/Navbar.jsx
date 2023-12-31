import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { navLinks } from '../constants';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className='flex h-[80px] fixed justify-center w-full top-0 bg-white shadow-md z-10'>
      <nav className='flex justify-between w-full items-center'>
        <a href='/'>
          <h3 className='text-2xl px-10 font-poppins font-bold'>Trevin Lee</h3>
        </a>
        <button className='mr-5 text-xl lg:hidden'>
          <AiOutlineMenu/>
        </button>
        <ul className='flex gap-10 px-10 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}
                className='hover:scale-[1.05]'>
              <a href={item.href}
                 className='leading-normal font-poppins font-semibold text-lg align-middle'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
};

export default Navbar;