import React from 'react'
import { MoveRight } from "lucide-react";

const LeftSection = ({ imageURL, productName, productDesription, tryDemo = "#", learnMore = "#", googlePlay = "#", appStore = "#" }) => {
    return (
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 my-10">
            <div className="w-[90%] md:w-1/2 flex justify-center items-center">
                <img src={imageURL} />
            </div>
            <div className="w-full md:w-1/2 p-5 mt-5">
                <h2 className="text-2xl font-bold text-gray-800">{productName}</h2>
                <p>{productDesription}</p>
                <div className='my-3'>
                    <a href={tryDemo} className='text-blue-500 hover:underline pt-3'>Try Demo <MoveRight className='inline ml-2' /></a>
                    <a href={learnMore} className='text-blue-500 hover:underline pt-3 ml-4'>
                        Learn More <MoveRight className='inline ml-2' />
                    </a>
                </div>
                <div className="my-3 gap-4 flex">
                    <a href={googlePlay} className='text-center'>
                        <img src="media/googlePlayBadge.svg" />
                    </a>
                    <a href={appStore}>
                        <img
                            src="media/appstoreBadge.svg"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LeftSection