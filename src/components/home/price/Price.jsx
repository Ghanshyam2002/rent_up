import React from 'react'
import Heading from '../../common/Heading'
import PriceCard from './PriceCard'
import "./price.css"

const Price = () => {
  return (
    <div>
      <section className='price padding'>
        <div className="container">
            <Heading title="Select Your Package" subtitle="Your package is select according to your requirement."/>
            <PriceCard />
        </div>
      </section>
    </div>
  )
}

export default Price
