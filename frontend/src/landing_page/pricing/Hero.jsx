import React from 'react'

const Hero = () => {
  return (
    <div className="">
      <div className="p-5 mt-5 border-bottom text-center">
        <h2 className="text-2xl font-bold text-gray-800">Pricing</h2>
        <h3 className="text-gray-700 mt-3 fs-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="w-full p-5 md:mt-5 text-center flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="w-full md:w-1/3 p-4 flex flex-col justify-center items-center">
          <img src="media/pricingEquity.svg" className='w-1/3 md:w-[90%]'/>
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4 flex flex-col justify-center items-center">
          <img src="media/intradayTrades.svg" className='w-1/3 md:w-[90%]'/>
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4 flex flex-col justify-center items-center">
          <img src="media/pricingEquity.svg" className='w-1/3 md:w-[90%]'/>
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero