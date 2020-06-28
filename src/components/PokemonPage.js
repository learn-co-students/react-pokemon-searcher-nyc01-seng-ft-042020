import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokeList: [],
    searchTerm: ""
  }

  changeSearch = (term) => {
  this.setState({searchTerm:term})
  }


  returnsPokemon = () => {
    let theArrayToReturn = this.state.pokeList.filter((pokemon) => {
      return (
      pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      )
    })
    
    return theArrayToReturn
  }

  componentDidMount(){
 
      fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then((pokeObj)=>{
       this.setState({
         pokeList: pokeObj
      })
        
      })
   
    }

addPokemon = (newPoke) => {
let copyArr = [...this.state.pokeList, newPoke]

this.setState({
  pokeList: copyArr
})

}

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon = {this.addPokemon} />
        <br />
        <Search searchTerm={this.state.searchTerm}
                changeSearch={this.changeSearch}
         />
        <br />
        <PokemonCollection pokeList={this.returnsPokemon()} 
        cardClick = {this.state.cardClick}/>
      </Container>
    )
  }
}

export default PokemonPage
