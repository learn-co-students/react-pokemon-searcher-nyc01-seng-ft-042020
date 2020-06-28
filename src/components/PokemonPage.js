import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokeData: [],
    pokeSearch: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    // .then(console.log)
    .then(fetchedData => {
      this.setState({
        pokeData: fetchedData
      })
    })
  }

  addNewPoke = (pokeFromChild) => {
    let newPokeArray = [...this.state.pokeData, pokeFromChild]
    this.setState({
      pokeData: newPokeArray
    })
  }

  findPoke = (e) => {
    this.setState({
      pokeSearch: e.target.value
    })
  }

  filterPoke = () => {
    let filteredPoke = this.state.pokeData.filter((poke) => {
      return poke.name.includes(this.state.pokeSearch)
    })
    return filteredPoke
  }

  render() {
    
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPoke={this.addNewPoke}/>
        <br />
        <Search findPoke={this.findPoke}/>
        <br />
        <PokemonCollection pokeData={this.filterPoke()} />
      </Container>
    )
  }
}

export default PokemonPage
