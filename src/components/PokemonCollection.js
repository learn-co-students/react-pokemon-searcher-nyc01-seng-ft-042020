import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    const pokeArray = this.props.pokeData.map((poke) => 
    {return <PokemonCard key={poke.id} pokeData={poke} />
    })

    return (
      <Card.Group itemsPerRow={6}>
        <h1>{pokeArray}</h1>
      </Card.Group>
    )
  }
}

export default PokemonCollection
