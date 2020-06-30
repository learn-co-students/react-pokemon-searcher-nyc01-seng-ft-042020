import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    frontImageShow: true
  }

  togglePicture = () => {
    this.setState({
      frontImageShow: !this.state.frontImageShow
    })
  }
  
  render() {
    let { name, hp } = this.props.pokemon
    let front = this.props.pokemon.sprites.front
    let back = this.props.pokemon.sprites.back
    return (
      <Card>
        <div>
          <div className="image" onClick={this.togglePicture}>
            <img alt="oh no!" src={ this.state.frontImageShow ? front : back }
             />
          </div>
          <div className="content">
            <div className="header">{ name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              { hp } hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
