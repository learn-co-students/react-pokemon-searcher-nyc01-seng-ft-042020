import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state={
    pokemon:[],
    searchQuery:'',
    name:'',
    hp:'',
    frontUrl:'',
    backUrl:'',
  }
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(r=>r.json())
    .then(data=>{this.setState({pokemon:data})})
  }
  addPokemon=(pokemon)=>{
    fetch('http://localhost:3000/pokemon',{
      method:'POST',
      headers:{
        "content-type":'application/json',
        accept:"application/json"
      },
      body:JSON.stringify(pokemon)
    }).then(r=>{
      this.componentDidMount()
    })
  }
  searchQuery=()=>this.state.pokemon.filter(poke=>{
    return poke.name.includes(this.state.searchQuery)
  })
  
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} handleChange={this.handleChange} name={this.state.name} hp={this.state.hp} frontUrl={this.state.frontUrl} backUrl={this.state.backUrl}/>
        <br />
        <Search value={this.state.searchQuery} handleChange={this.handleChange}/>
        <br />
        <PokemonCollection pokemon={this.searchQuery()}/>
      </Container>
    )
  }
}

export default PokemonPage
