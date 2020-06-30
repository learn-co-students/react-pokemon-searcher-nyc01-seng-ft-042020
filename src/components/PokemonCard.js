import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    clickedByUser: false
  }

  handleClick = (evt) => {
    this.setState((prevState) => {
      return {
        clickedByUser: !prevState.clickedByUser
      }
    })
  }

  render() {  
    let {name, hp} = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleClick}>
            {this.state.clickedByUser === false
              ? 
            <img src={this.props.pokemon.sprites.front} alt="oh no!" />
            :
            <img src={this.props.pokemon.sprites.back} alt="oh no!" />
            }
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
