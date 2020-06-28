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
  
  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then((arrayOfPokemons) => {
      this.setState({
        pokemonList: arrayOfPokemons
      })
    })
  }

  changeSearchTerm = (termfromChild) => {
    this.setState({
      searchTerm: termfromChild
    })
  }

  filteredPokemonList = () => {
    let arrayToReturn = this.state.pokemonList.filter((pokemonPOJO) => {
      return(
        pokemonPOJO.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      )
    })
    return arrayToReturn
  }

  addNewPokemon = (pokemonInstance) => {
    let updatedPokemonArray = [...this.state.pokemonList, pokemonInstance]

    this.setState({
      pokemonList: updatedPokemonArray
    })
  }

  render() {
    const {pokemonList, searchTerm} = this.state
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
          addNewPokemon={this.addNewPokemon}
        />
        <br />
        <Search 
          searchTerm={searchTerm} 
          changeSearchTerm={this.changeSearchTerm}
        />
        <br />
        <PokemonCollection pokemons={this.filteredPokemonList()}/>
      </Container>
    )
  }
}

export default PokemonPage
