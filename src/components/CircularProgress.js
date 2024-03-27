import React, { useState, useEffect } from 'react';

const CircularProgress = ({ percent }) => {
  const [circumference, setCircumference] = useState(0);

  useEffect(() => {
    const calculateCircumference = () => {
      return (2 * Math.PI * 16);
    };

    setCircumference(calculateCircumference());
  }, []);

  return (
    <div className="flex items-center justify-end max-w-fit rounded-full -mt-7 mr-2 ">
      <svg className="transform -rotate-90 w-8 h-8 bg-black rounded-full ">
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" fill="transparent"
          className="text-gray-500" />

        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - percent / 100 * circumference}
          className="text-yellow-500" />
      </svg>
      <span className="-ml-6 text-xs font-semibold text-white opacity-85   ">{`${percent}`}<span className='text-[6px]  '>%</span></span>
    </div>
  );
}

export default CircularProgress;
