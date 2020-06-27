import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    spriteFront:true,
  }
  handleClick=(e)=>{
    const frontBack = this.state.spriteFront;
    this.setState({
      spriteFront:!frontBack
    })
  }
  render() {
    return (
      <Card>
        <div onClick={e=>this.handleClick(e)}>
          <div className="image">
            <img src={this.state.spriteFront ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
    <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
