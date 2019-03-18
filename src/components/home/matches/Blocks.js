import React, { Component } from 'react';
import { firebaseMat } from '../../../firebase';
import { firebaseLopper } from '../../ui/misc';
import MatchesBlock from '../../ui/Matches_block';
import Slide from 'react-reveal/Slide';

export class Blocks extends Component {
  state = {
    matches: []
  };

  componentDidMount() {
    firebaseMat
      .limitToLast(6)
      .once('value')
      .then(snapshot => {
        const matches = firebaseLopper(snapshot);
        this.setState({
          matches: matches.reverse()
        });
      });
  }

  showMatches = matches =>
    matches
      ? matches.map((match, i) => (
          <Slide bottom key={match.id}>
            <div className="item">
              <div className="wrapper">
                <MatchesBlock match={match} />
              </div>
            </div>
          </Slide>
        ))
      : null;

  render() {
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}

export default Blocks;
