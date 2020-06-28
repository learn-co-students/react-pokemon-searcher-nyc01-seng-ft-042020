import React from 'react'

const Search = props => {

  function handleSearch(evt){
    props.changeSearch(evt.target.value)
  }

  return (
    <div className="ui search" onChange={handleSearch} value={props.searchTerm}>
      <div className="ui icon input">
        <input className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
