import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

let PokemonCollection = (props) => {

 let pokeArr =  props.pokeList.map((pokemonObj)=>{

      return <PokemonCard
      className="column" 
      key = {pokemonObj.id}
      pokemon = {pokemonObj}    
      /> 
    
    })
  


return ( 

<div className="ui very relaxed four column grid">
  <div>
{pokeArr}
</div>
</div>

    )
  }


export default PokemonCollection
