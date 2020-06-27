import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.addPokemon({
      name:e.target.name.value,
      hp:e.target.hp.value,
      sprites:{
        front:e.target.frontUrl.value,
        back:e.target.backUrl.value
      }
    })
  }
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onChange={e=>this.props.handleChange(e)} onSubmit={(e)=>{this.handleSubmit(e)}}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.props.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.props.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.props.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.props.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
