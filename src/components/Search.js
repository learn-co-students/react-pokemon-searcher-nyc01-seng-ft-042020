import React from 'react'

const Search = props => {

  let handleChange = (evt) => {
    props.updatedSearchTerm(evt.target.value)
  }
  
  console.log(props)
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt"
          value={props.searchTerm}
          onChange={handleChange}
        />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
