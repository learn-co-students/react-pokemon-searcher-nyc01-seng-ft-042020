import React from 'react'

const Search = props => {

  const handleChange = (evnt) => {
    props.handleSearch(evnt.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={props.searchTerm} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
