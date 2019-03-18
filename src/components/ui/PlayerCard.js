import React from 'react';
import PropTypes from 'prop-types';

const PlayerCard = props => {
  const { name, number, lastName, background } = props;
  return (
    <div className="player_card_wrapper">
      <div
        className="player_card_thmb"
        style={{
          background: `#f2f9ff url(${background})`
        }}
      />
      <div className="player_card_nfo">
        <div className="player_card_number">{number}</div>
        <div className="player_card_name">
          <span>{name}</span>
          <span>{lastName}</span>
        </div>
      </div>
    </div>
  );
};

PlayerCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  lastName: PropTypes.string.isRequired,
  background: PropTypes.string
};

export default PlayerCard;
