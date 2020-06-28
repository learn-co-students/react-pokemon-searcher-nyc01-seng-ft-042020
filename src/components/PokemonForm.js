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

  fetch('http://localhost:3000/pokemon', {
    method: "POST",
    headers: {
      "content-type":"application/json"
    },
    body: JSON.stringify({
      name: this.state.name,
      stats: [{
      value: this.state.hp,
      name: this.state.hp }
      ],
      sprites: {
      front: this.state.frontUrl,
      back: this.state.backUrl
    }
  })
  })
  .then(resp => resp.json())
  .then((newPoke)=>{
    this.props.addPokemon(newPoke)
  })


  }



  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleInput} value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleInput} value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleInput} value={this.state.frontUrl} />
            <Form.Input fluid label="Back Image URL" placeholder="url" onChange={this.handleInput} name="backUrl" value={this.state.backUrl} />
          </Form.Group>
          <Form.Button onChange={this.deletePokemon}>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
