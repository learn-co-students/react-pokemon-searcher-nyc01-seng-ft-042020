import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    clickedByUser: false
  }
  
  handleClick = (e) => {
    this.setState((prevState) => {
      return {
        clickedByUser: !prevState.clickedByUser
      }
    })
  }

  render() {
    let {name, hp} = this.props.pokeData
    let {front, back} = this.props.pokeData.sprites

    return (
      <Card>
        <div>
          <div className="image">
            {this.state.clickedByUser ?
              <img 
              src={back} 
              alt="oh no!" 
              onClick={this.handleClick} />
             : 
             <img 
              src={front} 
              alt="oh no!" 
              onClick={this.handleClick} />
             }
          </div>
          <div className="content">
    <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
