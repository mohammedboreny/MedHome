import React from 'react'
import { Link } from 'react-router-dom'

const Footer1 = () => {
  return (

<footer class="p-4 bg-white container mt-5">
    <div class="sm:flex sm:items-center sm:justify-between">
        <Link to="/" class="flex items-center mb-4 sm:mb-0">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="Flowbite Logo" /> */}
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MedHome</span>
        </Link>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" class="mr-4 hover:underline  ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline ">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline  ">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link to="/" class="hover:underline">MedHome</Link>. All Rights Reserved.
    </span>
</footer>


  )
}

export default Footer1