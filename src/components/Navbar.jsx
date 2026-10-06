import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-5 py-5 sm:py-6 px-5 sm:px-8 lg:px-12 bg-(--c1) border-b border-(--c2)">

      <Link
        className="text-2xl sm:text-3xl font-bold tracking-tight hover:text-(--c3) transition-colors duration-200"
        to='/'
      >
        Media<span className="text-(--c3)">Search</span>
      </Link>

      <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
        <Link
          className="flex-1 sm:flex-none text-sm sm:text-base text-center bg-(--c4) text-(--c1) rounded-lg cursor-pointer active:scale-95 font-semibold px-4 sm:px-5 py-2.5 hover:bg-(--c3) transition-all duration-200"
          to='/'
        >
          Search
        </Link>

        <Link
          className="flex-1 sm:flex-none text-sm sm:text-base text-center bg-(--c4) text-(--c1) rounded-lg cursor-pointer active:scale-95 font-semibold px-4 sm:px-5 py-2.5 hover:bg-(--c3) transition-all duration-200"
          to='/collection'
        >
          Collection
        </Link>
      </div>

    </div>
  )
}

export default Navbar