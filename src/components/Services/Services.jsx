import React from 'react'
import {services} from '../../lib/services'
import ServiceCards from '../cards/ServiceCards'
import ServiceCar from './ServiceCar'

const Services = () => {
  return (
    <div>Services

        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6'>

            {
                services.map((service) =>(
                   <ServiceCar service={service} key={service._id}></ServiceCar>
                ))
            }

        </div>
    </div>
  )
}

export default Services