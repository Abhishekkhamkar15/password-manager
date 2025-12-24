import React from 'react'

const Navbar = () => (
  <nav className="bg-purple-400 flex justify-between items-center px-6 py-4">
    <div className="font-bold text-xl">Password</div>
    <ul className="flex gap-6">
      <li><a className='hover:font-bold' href="#">Home</a></li>
      <li><a className='hover:font-bold' href="#">About</a></li>
      <li><a className='hover:font-bold' href="#">Contact</a></li>
    </ul>
  </nav>
)

export default Navbar
