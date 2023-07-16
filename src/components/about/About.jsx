import React from 'react'
import img from '../images/about.jpg'
import Back from '../common/Back'
import Heading from '../common/Heading'
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name="About Us" title="About Us - Who We Are?" cover={img}/>
        <div className="container flex mtop">
            <div className="left row">
                <Heading title="Our Agency Story" subtitle="Check out our company story and work process"/>

                <p>
                RentUp understood the struggles and frustrations that tenants and landlords faced in the traditional rental market. Searching for the perfect home was often time-consuming and overwhelming, while property owners struggled to find reliable and trustworthy tenants. RentUp saw an opportunity to bridge the gap and create a platform that would benefit both parties.
                </p>

                <p>
                Driven by a passion for simplifying the rental experience, RentUp assembled a team of dedicated professionals from diverse backgrounds, including real estate, technology, and customer service. They were united by their commitment to providing exceptional service and delivering innovative solutions.
                </p>

                <p>
                But RentUp didn't stop there. They understood that finding the right property was just the beginning of the rental journey. To ensure a smooth and transparent process, RentUp implemented a robust tenant screening system. They partnered with renowned credit agencies and background check providers to verify the credibility of potential tenants, giving landlords peace of mind when selecting their ideal renters.
                </p>
                <button className='btn2'>More About Us</button>
            </div>
            <div className="right row">
                <img src="./images/immio.jpg" alt="" />
            </div>
        </div>
      </section>
    </>
  )
}

export default About
