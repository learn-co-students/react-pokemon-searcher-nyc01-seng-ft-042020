import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    img: true,
  };

  handleClick = (event) => {
    this.setState({
      img: !this.state.img,
    });
  };

  render() {
    const { hp, name, sprites } = this.props.pokemon;
    return (
      <Card>
        <div>
          <div className="image">
            <img
              onClick={this.handleClick}
              src={this.state.img ? sprites.front : sprites.back}
              alt="oh no!"
            />
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
    );
  }
}

export default PokemonCard;
