import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    search: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(pokemonFetched => {
      this.setState({
        pokemon: pokemonFetched
      })
    })
  }

  addOnePokemon = (pokemon) => {
    let copyOfPokemon = [...this.state.pokemon, pokemon]
    this.setState({
      pokemon: copyOfPokemon
    })
  }


  handleSearch = (event) => {
    console.log(event.target.value)
    this.setState({
      search: event.target.value
    })
  }

  pokemonArray = () => {
    let pokemonArray = [...this.state.pokemon]
    if (this.state.search) {
      pokemonArray = this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.search))
    }
    return pokemonArray
  }

  render() {
    // console.log(this.state.pokemon)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addOnePokemon={this.addOnePokemon}/>
        <br />
        <Search search={this.state.search} handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemon={this.pokemonArray()}/>
      </Container>
    )
  }
}

export default PokemonPage
