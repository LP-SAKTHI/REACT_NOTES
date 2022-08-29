import React from 'react'

const Search = ({handleSearch}) => {
  return (
    <div className='search'>
      <img src = "https://cdn-icons-png.flaticon.com/512/3308/3308543.png" 
      width= "20px"
      height= "20px"
      alt = "search"/>
        <input 
        type = "text"
        className='search-box'
         onChange={(e)=>handleSearch(e.target.value)} placeholder = "search your notes here"
         />
    </div>
  )
}

export default Search