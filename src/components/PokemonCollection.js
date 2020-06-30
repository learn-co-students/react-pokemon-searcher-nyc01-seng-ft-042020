import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component  {

  render() {
    let getAllPokemon = this.props.pokemon.map((onePokemon) => {
      return <PokemonCard pokemon={onePokemon} key={onePokemon.id} />
    })
    return (
      <Card.Group itemsPerRow={6}>
        {getAllPokemon}
      </Card.Group>
    )
  }
}

export default PokemonCollection
