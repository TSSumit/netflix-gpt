import { Search } from '@icon-park/react'
import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'

const GptSearchBar = () => {
  const lanKey=useSelector(store=>store?.config?.lang)


  return (
    <div className='mt-24 w-screen h-440px'>
      <form className="flex items-center justify-center w-full">   
        <label for="voice-search" className="sr-only">Search</label>
        <div className="relative w-2/5">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" theme="outline" size="24" fill="#333"/>
          </div>
          <input 
            type="text" 
            id="voice-search" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder={lang[lanKey].gptSearchPlaceholder}
          >
          </input>
          <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" ></svg>
          </button>
        </div>
        <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <Search className="w-5 h-5 mr-1 text-gray-500 dark:text-gray-400" theme="outline" size="20" fill="#333"/>
          {lang[lanKey].search}
        </button>
    </form>
    </div>
  )
}

export default GptSearchBar