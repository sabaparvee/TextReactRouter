import React from 'react';
import {Link} from 'react-router-dom'


export default function Navbar(props) {
  return (
   <nav className={`bg-${props.mode}`}>
   

    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4 ">
              <a href="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">{props.title}</a>
              <Link  to="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</Link>
              <Link to="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</Link>

              
            </div>
          </div>
        </div>
        <div className=' flex flex-row bg'>
        <label htmlFor="AcceptConditions"className="relative inline-block h-6 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500">
            <input type="checkbox" id="AcceptConditions" className="peer sr-only" onClick={props.toggleMode}/>
            <span
              className="absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-white transition-all peer-checked:start-6"
            ></span>
        </label>
        <a className='text-sm font-medium text-gray-300'>Enable {props.mode==='white'?'dark':'light'} Mode</a>
        </div> 
      </div>
    </div>
  
  
  </nav>
  )
}
