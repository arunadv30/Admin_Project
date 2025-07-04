import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import {useState } from "react";

import React from "react";

const SearchBar = () => {
  const [selectedStatus, setSelectedStatus] = useState("Check Status");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching in "${selectedStatus}"`);
  };

  const categories = ["Approved", "Rejected"];
  return (
    <form onSubmit={handleSubmit} class="max-w-2xl mx-auto">
      <div class="flex">
        <Menu as="div" class="relative">
          <MenuButton class="inline-flex items-center text-sm">
            {selectedStatus}
            <ChevronDownIcon class="w-4 h-4 ml-2" aria-hidden="true" />
          </MenuButton>

          <MenuItems className="absolute z-10 mt-1 w-44 origin-top-left 
          bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700">
            <div className="py-1">
              {categories.map((category) => (
                <MenuItem
                  as="button"
                  onClick={() => setSelectedStatus(category)}
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {category}
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>

        <div class="relative w-full">
          <input
            type="search"
            class="block p-2.5 w-full z-20 text-sm text-gray-900 
                bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border 
                border-gray-300 focus:ring-blue-500 focus:border-blue-500
                dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search status Approved, Rejected..."
            required
          />
          <button
            type="submit"
            class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full 
                text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 
                focus:ring-4 focus:outline-none focus:ring-blue-300
                 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <MagnifyingGlassIcon class="w-4 h-4 text-blue-500" />
            <span class="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
