import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
    name: "",
    hp: "",
    front: "",
    back: ""
  }

  handleInput = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()

    fetch("http://localhost:3000/pokemon",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        hp: this.state.hp,
        sprites: {
          front: this.state.front,
          back: this.state.back
        }
      })
    })
    .then(r => r.json())
    .then((newPokemon) => {
      this.props.addNewPokemon(newPokemon)
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input 
              fluid label="Name" 
              placeholder="Name" 
              name="name" 
              value={this.state.name}
              onChange={this.handleInput}
            />
            <Form.Input 
              fluid label="hp" 
              placeholder="hp" 
              name="hp" 
              value={this.state.hp}
              onChange={this.handleInput}
            />
            <Form.Input 
              fluid label="Front Image URL" 
              placeholder="url" 
              name="front" 
              value={this.state.frontUrl}
              onChange={this.handleInput}
            />
            <Form.Input 
              fluid label="Back Image URL" 
              placeholder="url" 
              name="back" 
              value={this.state.backUrl}
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
