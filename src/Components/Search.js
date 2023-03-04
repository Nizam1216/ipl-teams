import React from 'react'
import members from '../utils/members'

const Search = ({ setsearch, search, setList }) => {
  const onChangeInput = (e) => {
    const { value } = e.target
    setsearch(value)

    const filteredArray = members.filter((i) => {
      return i.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    });
 
  if (value === '') {
    setList([])
  } else {
    setList(filteredArray)
  }
}
  return (
    <>
      <input className='searchbar'

        onChange={onChangeInput}
        style={{
          width: "100%",
          fontSize: "14px",
          border: 0,
          borderBottom: " 2px solid #ccc",
          outline: "none"
        }}
        placeholder='Search here...' type="search" />
    </>
  )
}

export default Search
