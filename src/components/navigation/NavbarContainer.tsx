import React from 'react';
import Navbar from './Navbar';

type Props = {}

function NavbarContainer({}: Props) {
  return (
    <div className='w-full h-full flex justify-center items-center sticky top-0 m-4'>
      <Navbar /></div>
  )
}

export default NavbarContainer