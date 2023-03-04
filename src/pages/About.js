import React from 'react'
import ShowSearch from '../Components/ShowSearch'
import '../Components/Carddetails.css'
import Carddetails from '../Components/Carddetails'

const About = ({setsearch ,list, search}) => {
  

  return (
    <div>
      
      {list === null && <Carddetails setsearch={setsearch} />}
      {list !== null && <ShowSearch search={search} list={list} />}
      {!search && list.length === 0 && <Carddetails setsearch={setsearch}/> }

      
     
          </div>
          
  )
}

export default About
