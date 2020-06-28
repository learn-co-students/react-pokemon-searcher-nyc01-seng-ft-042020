import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = (props) => {
  let arrayOfPokemon = props.pokemons.map((pokemonPOJO) => {
    return <PokemonCard
      pokemon={pokemonPOJO}
      key={pokemonPOJO.id}
    />
  })

  return (
    <Card.Group itemsPerRow={6}>
      {arrayOfPokemon}
    </Card.Group>
  )
}

export default PokemonCollection
