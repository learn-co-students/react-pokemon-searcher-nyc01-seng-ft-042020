import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  render() {
    let arrOfPokemon = this.props.pokeArray.map((pokemon) => {
      return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
    });
    return <Card.Group itemsPerRow={6}>{arrOfPokemon}</Card.Group>;
  }
}

export default PokemonCollection;
