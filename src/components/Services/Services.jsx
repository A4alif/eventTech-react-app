import React, { useEffect, useState } from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect( () => {
        fetch( "./event.json")
        .then( res => res.json())
        .then ( data => setServices(data))
    }, [])
  return (
    <>
        <section className='pt-32 pb-24 bg-gray-200'>
            <h2 className='text-center text-4xl md:text-6xl font-semibold'><span className='single-text-gradient'>EventTech</span> Services</h2>
            <p className='text-center py-6 text-md text-green-700'>We make your events smart & impactful by personalised event management services</p>
            <div className="container mx-auto p-6">
            {/* grid container */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-9 p-3 md:p-6'>
              {
                services.map( (service) => (
                  <ServiceCard key={service.id} service = {service} />
                ))
              }
            </div>
            </div>
            
        </section>
    </>
  )
}

export default Services