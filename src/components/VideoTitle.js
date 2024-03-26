import React,{useState} from 'react'
import { PlayOne, Info } from '@icon-park/react'

const VideoTitle = ({title, overview}) => {
  const [moreInfo, setMoreInfo]=useState(false);
  const handleMoreInfoOnClick=()=>{
    if(moreInfo){
      setMoreInfo(false);
    }
    else{
      setMoreInfo(true);
    }
  }
  return (
    <div className='ml-10 mt-96 flex flex-col absolute text-gray-200'>
        <h1 className=' inline-block my-2 text-3xl font-bold hover:text-[30.5px] '>{title}</h1>
        <p className=' inline-block  my-2 w-2/5'>{overview}</p>
        <div className='my-2  inline-block'>
          <div className='inline-block text-black'>
            <button  className={`bg-white rounded-md px-4 py-1 m-2 ml-0 border border-black shadow-gray-400 transition duration-500 ease-in-out   hover:ring hover:ring-gray-400 hover:opacity-65 active:bg-gray-400 `}  >{<PlayOne className='inline-block align-middle pb-[3px]' theme="filled" size="21" fill="#333"/>} Play </button>
          </div>
          <div className='inline-block text-black'>
            <button onClick={handleMoreInfoOnClick} className={`bg-white rounded-md px-4 py-1 m-2 border border-black shadow-gray-400 transition duration-500 ease-in-out   hover:ring hover:ring-gray-400 hover:opacity-65 active:bg-gray-700 active:text-gray-100 ${moreInfo && 'bg-gray-500'} `}  >{<Info className='inline-block align-middle pb-[4px] pr-1' theme="outline" size="17" fill="#333"/>} More Info </button>
          </div>
        </div>
        {moreInfo && <p className='pt-20 text-xs text-gray-300'>In the Netflix application, 'More Info' provides users with additional details about a movie or TV show, enhancing their viewing experience. This feature offers insights into the plot, cast, ratings, and reviews, empowering users to make informed decisions before watching. With 'More Info,' users can delve deeper into the content they're interested in, ensuring they find the perfect entertainment for their preferences and mood.</p>}
    </div>
  )
}

export default VideoTitle