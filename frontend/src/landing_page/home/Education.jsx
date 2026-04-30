import React from 'react'
import { MoveRight } from "lucide-react";

const Education = () => {
  return (
    <div className="my-20 text-gray-700">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
        <div className="w-full md:w-1/2 px-10 flex justify-center items-center ">
          <img src="media/education.svg" className="width-[25%] md:width-[50%]" />
        </div>
        <div className="w-full md:w-1/2 px-10">
          <h2 className="text-2xl font-bold text-gray-800">Free and open market education</h2>
          <p className="mt-5">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className='text-blue-500 hover:underline pt-3'>
            Versity
            <MoveRight className='inline ml-2' />
          </a>
          <p className="mt-5">
            Trading Q&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" className='text-blue-500 hover:underline pt-3'>
            TradingQ&A <MoveRight className='inline ml-2' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Education