import React from 'react'

const Hero = () => {
    return (
        <section className="flex flex-col justify-between items-center bg-blue-500 pt-20 text-white px-5 md:px-10 lg:px-48 w-full" id="supportHero">
            <div className="m-3 w-full gap-6 flex justify-between">
                <div className="w-1/2 p-3 flex flex-col items-start justify-between">
                    <h4 className="text-2xl font-bold">Support Portal</h4>
                    <h5 className="fs-3">
                        Search for an answer or browse help topics to create a ticket
                    </h5>
                    <input placeholder="Eg. how do I activate F&O" className='bg-white rounded text-gray-900 px-4 py-3 w-1/2 my-2' disabled/>
                    <br />
                    <div className='flex justify-items-start items-start'>
                    <a href="#" className='my-1 underline'>Track account opening</a>
                    <a href="#" className='my-1 underline'>Track segment activation</a>
                    <a href="#" className='my-1 underline'>Intraday margins</a>
                    <a href="#" className='my-1 underline'>Kite user manual</a>
                    </div>
                </div>
                <div className="w-1/2 p-3 flex flex-col items-start ">
                    <h4 className="text-2xl font-bold">Track Tickets</h4>
                    <h5 className="my-1">Featured</h5>
                    <ol className='list-decimal pl-10'>
                    <li><a href="#" className='my-1 underline'>Current Takeovers and Delisting - January 2026</a></li>
                    <li><a href="#" className='my-1 underline'>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Hero