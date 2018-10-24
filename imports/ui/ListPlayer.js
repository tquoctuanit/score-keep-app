import React, { Component } from 'react';
import Player from './Player';
import PropTypes from 'prop-types';

export default class ListPlayer extends Component {
  renderPlayers = playerList => {
    return playerList.map(player => {
      return <Player key={player._id} player={player} />;
    });
  };
  render() {
    let {players} = this.props;

    return (
        <div>
            {this.renderPlayers(players)}
        </div>
    );
  }
}

ListPlayer.propTypes = {
    players : PropTypes.array.isRequired
}