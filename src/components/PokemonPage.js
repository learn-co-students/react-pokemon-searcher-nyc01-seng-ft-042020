import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemonList: [],
    searchTerm: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then((pokemons) => {
      this.setState({
        pokemonList: pokemons
      })
    })
  }

  updatedSearchTerm = (termfromChild) => {
    this.setState({
      searchTerm: termfromChild
    })
  }

  addNewPokemon = (newPokemonInstance) => {
    let copyOfArray = [...this.state.pokemonList, newPokemonInstance]
    this.setState({
      pokemonList: copyOfArray
    })
  }

  returnNewArray = () => {
    let newArrayToReturn = this.state.pokemonList
    if (this.state.searchTerm.length > 1) {
      newArrayToReturn = this.state.pokemonList.filter((pokemonPOJO) => {
        return (
          pokemonPOJO.name.toLowerCase() === this.state.searchTerm.toLowerCase()
        )
      })
    }
    return newArrayToReturn
  }

  render() {
    let {pokemonList} = this.state
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
          addNewPokemon={this.addNewPokemon}
        />
        <br />
        <Search 
          searchTerm={this.state.searchTerm}
          updatedSearchTerm={this.updatedSearchTerm}
        />
        <br />
        <PokemonCollection 
          pokemons={this.returnNewArray()}
        />
      </Container>
    )
  }
}

export default PokemonPage
