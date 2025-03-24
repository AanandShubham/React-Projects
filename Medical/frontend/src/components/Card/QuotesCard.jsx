import React from 'react'

const QuotesCard = ({quotes,writer}) => {
    return (
        <div>
            <div className="border-4 w-[300px] border-sky-200 h-[300px] flex flex-col  mt-4 justify-center gap-4 items-center p-3 hover:bg-blue-100 bg-blue-200  rounded-tl-4xl rounded-tr-4xl rounded-bl-2xl ">

                <div className='w-full font-bold ml-4'>
                   {quotes}
                </div>
                <h3 className='p-2 mr-5 text-end text-xl text-black rounded-2xl'>
                    {writer}
                </h3>
            </div>
        </div>
    )
}

export default QuotesCard
