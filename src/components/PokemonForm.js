import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  
  state = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "", 
  }

  // make a controlled form that changes the state onChange 
  // make a post request onSubmit that send this.state stuff 
  // this form and collection are SIBLINGS
  // need to send the response of the new data to the PAGE, then pass down to collection
  // 

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
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
    .then(resp => resp.json())
    .then(newPokemon => {
      this.props.addNewPoke(newPokemon)
    })
    //POST in here 
    //in the .then call the passed down function to add data to collection  
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
