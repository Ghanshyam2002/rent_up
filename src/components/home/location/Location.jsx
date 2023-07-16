import React from 'react'
import "./location.css"
import Heading from '../../common/Heading'
import { location } from '../../data/Data'

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className="container">
            <Heading title="Explore By Location" subtitle=" you can easily narrow down your search by specifying the desired area or neighborhood. Simply enter the name of the city, town, or district you're interested in, and our website will provide you with a list of available rental properties in that location. "/>

            <div className="content grid3 mtop">
                {location.map((items,index) =>{
                    return(
                        <div className="box" key={index}>
                            <img src={items.cover} alt="" />
                            <div className="overlay">
                                <h5>{items.name}</h5>
                                <p>
                                    <label>{items.Villas}</label>
                                    <label>{items.Offices}</label>
                                    <label>{items.Apartments}</label>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>
    </>
  )
}

export default Location
