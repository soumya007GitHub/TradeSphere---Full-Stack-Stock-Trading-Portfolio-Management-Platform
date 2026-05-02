import React from 'react'
import { Link } from "react-router-dom";
import { Rss, Bird } from "lucide-react";

const Team = () => {
  return (
    <div className="w-full flex flex-col md:my-20 gap-6 px-5 md:px-10 lg:px-48">
      <div className="p-3 mt-5">
        <h1 className="text-center text-2xl font-semibold pt-10">People</h1>
      </div>

      <div
        className="text-gray-700 flex flex-col md:flex-row justify-center items-center"
        style={{ lineHeight: "1.8", fontSize: "1rem" }}
      >
        <div className="w-full md:w-1/2 p-3 text-center flex flex-col items-center">
          <img
            src="media/soumya.jpeg"
            className='rounded-full w-[30%] md:w-[50%]'
          />
          <h4 className="mt-5 text-lg font-semibold">Soumya Tripathy</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="w-full md:w-1/2 p-3">
          <p className='my-3'>
            Soumya bootstrapped and founded TradeSphere in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            TradeSphere has changed the landscape of the Indian broking industry.
          </p>
          <p className='my-3'>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className='my-3'>Playing basketball is his zen.</p>
          <p className='my-3'>
            Connect on <Link to="/" className='text-blue-600'>Homepage</Link> / <a href="#" className='text-blue-600'><Rss className='inline' /> TradingQnA</a> /
            <a href="https://www.linkedin.com/in/soumya-tripathy007" className='text-blue-600' target="_blank"><Bird className='inline' />Linkedin</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team