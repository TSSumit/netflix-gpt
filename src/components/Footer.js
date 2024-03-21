import React from 'react'
// import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer class=" p-4 backdrop-brightness-25 ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between flex-col">
                <us class="justify-start my-5">
                  <li>Questions? Call 000-800-919-1694</li>
                </us>
                <ul class="flex flex-wrap justify-evenly w-full items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <span class="hover:underline mx-4 md:me-6">FAQ</span>
                    </li>
                    <li>
                        <span class="hover:underline mx-16 md:me-6">About</span>
                    </li>
                    <li>
                        <span class="hover:underline mx-16 md:me-6">Privacy Policy</span>
                    </li>
                    <li>
                        <span class="hover:underline mx-16 md:me-6">Licensing</span>
                    </li>
                    <li>
                        <span class="hover:underline mx-16">Contact</span>
                    </li>
                    <li>
                        <span class="hover:underline mx-16">Help Center</span>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
        </div>
    </footer>
    
  )
}

export default Footer

