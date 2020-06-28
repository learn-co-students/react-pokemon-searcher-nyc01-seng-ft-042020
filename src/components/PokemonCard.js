import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
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
    const {name, hp} = this.props.pokemon
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            {this.state.clickedByUser
              ?
              <img src={this.props.pokemon.sprites.back} alt="oh no!" />
              :
              <img src={this.props.pokemon.sprites.front} alt="oh no!" />
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
