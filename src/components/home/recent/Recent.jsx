import React from 'react'
import Heading from '../../common/Heading'
import RecentCard from './RecentCard'
import "./Recent.css"

const Recent = () => {
  return (
    <>
     <section className='recent padding'>
        <div className="container">
            <Heading title="Recent Property Listed" subtitle="This Property is valueable price and location to available."/>
            <RecentCard />
        </div>
     </section> 
    </>
  )
}

export default Recent
