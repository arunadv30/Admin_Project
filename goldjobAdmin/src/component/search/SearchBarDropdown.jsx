import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import DropdownMenu from '../dropdownmenu/DropdownMenu'
import React from 'react'

const SearchBarDropdown = () => {
  return (
    <div class="flex flex-row space-x-4 p-4">
      <div class="basis-full">
       <div className="w-full border rounded">
        <select className="w-full p-2 bg-white text-gray-800 border-none focus:outline-none">
          <option value="">Options</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
        </div>
      </div>
      <div class="basis-full border rounded">
        <div class="flex">
        <input class="flex-1 p-2 bg-cyan-100 focus:outline-none"
        placeholder='Check status' required/>
        <MagnifyingGlassIcon class="h-6 w-6 m-2 bg-blue-600 rounded text-white p-1" />
        </div>
      </div>
    </div>
  )
}

export default SearchBarDropdown