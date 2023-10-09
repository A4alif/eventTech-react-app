import React, { useEffect, useState } from 'react'
import TeamCard from './TeamCard'

const Teams = () => {
    const [teams, setteams] = useState([])

    useEffect( () => {
        fetch("./team.json")
        .then( res => res.json())
        .then( data => setteams(data))
    }, [])
  return (
    <>
        <div className="container mx-auto px-6">
        <h2 className='text-5xl font-bold text-center pt-24 tracking-wide pb-24	'>Meet Our <span className='single-text-gradient'>Team</span> Members</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 md:px-0'>
            {
                teams.map( (team) => (
                    <TeamCard key={team.id} team={team} />
                ))
            }
        </div>
        </div>
    </>
  )
}

export default Teams