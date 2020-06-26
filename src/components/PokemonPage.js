import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch(`http://localhost:3000/pokemon`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          pokemon: json
        })
      })
  }

  addPokemon = (newPokemonProps) => {
    const { name, hp, frontUrl, backUrl } = newPokemonProps

    const newPokemon = {
      name: name,
      hp: hp,
      sprites: {
        front: frontUrl,
        back: backUrl
      }
    }

    const configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(newPokemon)
    }

    fetch(`http://localhost:3000/pokemon`, configObj)
      .then(resp => resp.json())
      .then(json => this.setState((prevState) => { return { pokemon: [...prevState.pokemon, json] }}))
    
  }

  handleSearch = (searchTermFromChild) => {    
    this.setState({
      searchTerm: searchTermFromChild
    })
  }

  render() {
    const { searchTerm } = this.state

    const pokeArray = this.state.pokemon.filter(pokemon => {return pokemon.name.includes(searchTerm)})

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search searchTerm={searchTerm} handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemon={pokeArray}/>
      </Container>
    )
  }
}

export default PokemonPage
