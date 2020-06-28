import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    cardClick:false
  }

  clickHandler = (evt) => {
    if (this.state.cardClick === false){
    this.setState({cardClick:true})}
    if (this.state.cardClick === true){
      this.setState({cardClick:false})
    }

  }


  render() {
    let {name, hp, sprites, id} = this.props.pokemon
    console.log(this.props)
    // console.log(this.props.pokemon.sprites.front)
    return (
      <Card>
        <div onClick={this.clickHandler}>
          <div className="image">
            {this.state.cardClick ?  <img src={sprites.back} alt="oh no!" /> : <img src="" alt="oh no!" /> }
          </div>
          <div className="content">
            <div className="header">{name.toUpperCase()}</div>
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
