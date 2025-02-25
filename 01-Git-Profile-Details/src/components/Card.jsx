import React from 'react'

const Card = ({ img ,username,follower,following,publicRepos,privateRepos}) => {
    return (
        <div>
            <div className="bg-neutral-500 rounded-lg flex flex-col items-center justify-center p-4 h-fit w-fit">
                <img className='w-fit h-fit rounded-md' src={img} alt="Error !! check Connection" />
                <h3>User Name : {username}</h3>
                <h3>Public Repository : {publicRepos}</h3>
                <h3>Private Repository : {privateRepos}</h3>
                <h3>Following : {following}</h3>
                <h3>Follower : {follower}</h3>
            </div>
        </div>
    )
}

export default Card
