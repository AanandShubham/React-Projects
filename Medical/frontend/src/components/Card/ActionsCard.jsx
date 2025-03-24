import React from 'react'
import {Link} from "react-router-dom"

const ActionsCard = ({header,content,link}) => {
    return (
        <div>
            <div className="bg-neutral-400 p-4 flex flex-col gap-4 items-center rounded-2xl shadow-2xl shadow-amber-600">
                <h2 className="text-2xl font-bold text-center">{header}</h2>

                <p>{content}</p>


                <Link
                    className=" w-fit text-amber-200 underline bg-blue-500 p-2 rounded-3xl "
                    to={link}
                >
                    {header}
                </Link>
            </div>
        </div>
    )
}

export default ActionsCard
