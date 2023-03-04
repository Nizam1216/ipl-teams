import React from 'react'
import ShowSearch from '../Components/ShowSearch'
import Card from '../Components/Card'
const Home = ({setsearch, search, list}) => {
  
  return (
    <div>
    {list === null && <Card />}
      {list !== null && <ShowSearch search={search} list={list} />}
      {!search && list.length === 0 && <Card /> }

     
    </div>
  )
}

export default Home
