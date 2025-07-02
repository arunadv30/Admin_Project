import React, { useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

const DropdownMenu = () => {
  return (
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton class="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
          {/* <ChevronDownIcon aria-hidden="true" class="size-5"></ChevronDownIcon> */}
          <EllipsisHorizontalIcon class="h-5 w-5  text-gray-500"/>
        </MenuButton>
      </div>
      <MenuItems transitionclass="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ">
      <div class="py-1">
        <MenuItem><a href="#" class="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">Approved</a></MenuItem>
        <MenuItem><a href="#" class="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">Rejected</a></MenuItem>
      </div>
      </MenuItems>
    </Menu>
  )
}

export default DropdownMenu