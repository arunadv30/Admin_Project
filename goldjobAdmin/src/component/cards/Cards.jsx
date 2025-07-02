import React from "react";
import reactImage from "../../assets/images/jobs.jpeg";
import DropdownMenu from "../dropdownmenu/DropdownMenu";

const Cards = () => {
  return (
    <div class="bg-pink-100 max-w-sm border border-gray-300 rounded-2xl overflow-hidden p-6 shadow-xl">
      <div class="flex justify-end">
        <DropdownMenu />
      </div>
      <div class="flex flex-col items-center">
        <img
          class="h-30 w-30 rounded-full mb-3"
          src={reactImage}
          alt="jobs image"
        />
        <h3 class="text-lg font-semibold text-gray-900 leading-tight">
          Job Name
        </h3>
        <p class="text-sm text-gray-600 mt-1">Job Role</p>
      </div>
      <hr class="text-gray-300" />
      <div class="flex flex-col justify-center py-2 px-4">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima alias
          iure quo, incidunt maxime quasi cum. Fugit debitis alias voluptates?
        </p>
         <button class="py-8">Status</button>
      </div>

     
    </div>
  );
};

export default Cards;
