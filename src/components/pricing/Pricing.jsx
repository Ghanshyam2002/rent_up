import React from 'react'
import PriceCard from '../home/price/PriceCard'
import Back from '../common/Back'
import img from '../images/pricing.jpg'


const Pricing = () => {
  return (
    <>
      <section className='services mb'>
        {/* <Back name="" title="" cover={} /> */}
        <Back name="30 days money back guarantee" title="No Extra Fees. Friendly Support" cover={img} />
        <div className="price container">
            <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Pricing
