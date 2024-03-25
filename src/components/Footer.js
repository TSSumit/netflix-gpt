import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=" p-4 backdrop-brightness-25 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between flex-col">
                <ul className="justify-start my-5">
                  <li>Questions? Call 000-800-919-1694</li>
                </ul>
                <ul className="flex flex-wrap justify-evenly w-full items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <Link to={"/faq"} className="hover:underline mx-4 md:me-6">FAQ</Link>
                    </li>
                    <li>
                        <Link to={"/about"} className="hover:underline mx-16 md:me-6">About</Link>
                    </li>
                    <li>
                        <Link to={"privacypolicy"} className="hover:underline mx-16 md:me-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to={"/licensing"} className="hover:underline mx-16 md:me-6">Licensing</Link>
                    </li>
                    <li>
                        <Link to={"/contact"} className="hover:underline mx-16">Contact</Link>
                    </li>
                    <li>
                        <Link to={"/helpcenter"} className="hover:underline mx-16">Help Center</Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://netflix.com/" className="hover:underline">NetFlix™</a>. All Rights Reserved.</span>
        </div>
    </footer>
    
  )
}

export default Footer

