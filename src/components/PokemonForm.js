import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  }

  handleInput = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()

    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        hp: this.state.hp,
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    })
    .then(r => r.json())
    .then((pokemonInstance) => {
      this.props.addNewPokemon(pokemonInstance)
    })
  }

  render() {
    const {name, hp, frontUrl, backUrl} = this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input 
              fluid label="Name" 
              placeholder="Name" 
              name="name" 
              value={name}
              onChange={this.handleInput}
            />
            <Form.Input 
              fluid label="hp" 
              placeholder="hp" 
              name="hp" 
              value={hp}
              onChange={this.handleInput}
            />
            <Form.Input 
              fluid label="Front Image URL" 
              placeholder="url" 
              name="frontUrl" 
              value={frontUrl}
              onChange={this.handleInput}
            />
            <Form.Input 
              fluid label="Back Image URL" 
              placeholder="url" 
              name="backUrl"
              value={backUrl}
              onChange={this.handleInput}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
