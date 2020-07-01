import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  state = {
    pokeArray: [],
    search: "",
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then((r) => r.json())
      .then((pokelist) => {
        this.setState({
          pokeArray: pokelist,
        });
      });
  }

  handleSearch = (e) => {
    // console.log(e.target.value);
    this.setState({
      search: e.target.value,
    });
  };

  addPokemon = (newPokemon) => {
    let copyArray = [...this.state.pokeArray, newPokemon];
    this.setState({
      pokeArray: copyArray,
    });
  };

  currentArray = () => {
    let array = this.state.pokeArray.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
    return array;
  };

  render() {
    let pokemonArray = this.currentArray();
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search search={this.state.search} handleSearch={this.handleSearch} />
        <br />
        <PokemonCollection pokeArray={pokemonArray} />
      </Container>
    );
  }
}

export default PokemonPage;
