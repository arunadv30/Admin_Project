import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./component/cards/Cards";
import SearchBarDropdown from "./component/search/SearchBarDropdown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="flex h-screen w-full overflow-x-hidden bg-gray-100">
        <aside class=" bg-white shadow-md">
          <div class="h-16 bg-amber-400 flex items-center justify-center border-b">
            <span class="text-xl font-semibold">Gold Tree IT</span>
          </div>

          <nav class="p-4 space-y-2">
            <a
              href="#"
              class="block px-4 py-2 text-black rounded hover:bg-gray-200 hover:text-black"
            >
              Dashboard
            </a>
            <a href="#" class="block px-4 py-2 rounded hover:bg-gray-200">
              Profile
            </a>
            <a href="#" class="block px-4 py-2 rounded hover:bg-gray-200">
              Settings
            </a>
            <a href="#" class="block px-4 py-2 rounded hover:bg-gray-200">
              Logout
            </a>
          </nav>
        </aside>

        <main class="flex-1 p-6">
          <h1 class="text-2xl font-bold">Main Content</h1>
          <p class="mt-4 mb-4">This is the main content area.</p>
          <SearchBarDropdown />
         <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
         </div>
        </main>
      </div>
    </>
  );
}

export default App;
