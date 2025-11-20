import React from 'react'
import { CircleCheckBig } from 'lucide-react';
import { Search } from "lucide-react";



const Navbar = () => {
  return (
    <nav className="w-full  bg-gray-00 shadow-sm px-6 py-4  flex items-center ">
      <CircleCheckBig />
      <h2 className="text-2xl font-semibold text-black mx-1 items-center">KanBan</h2>
     

     <div className="flex-1 flex px-6 mx-8 justify-between">
      <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />

    <input
      type="text"
      placeholder="Search tasks..."
      className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
  
</div>

<button className="px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 
       transition cursor-pointer">
      Create Project </button>
        

      </div>
    </nav>
  )
}

export default Navbar
