import React, { Component } from 'react';
import Stripes from '../../../resources/Resources/images/stripes.png';
import { Tag } from '../../ui/misc';
import Reveal from 'react-reveal/Reveal';
import Cards from './Cards';

export class MeetPlayers extends Component {
  state = {
    show: false
  };

  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({
            show: true
          });
        }}
      >
        <div
          className="home_meetplayers"
          style={{
            background: `#fff url(${Stripes})`
          }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <Cards show={this.state.show} />
              </div>
              <div className="home_text_wrapper">
                <div>
                  <Tag
                    addStyle={{
                      background: '#0e1731',
                      fontSize: '100px',
                      color: '#fff',
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}
                  >
                    Meet
                  </Tag>
                </div>
                <div>
                  <Tag
                    addStyle={{
                      background: '#0e1731',
                      fontSize: '100px',
                      color: '#fff',
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}
                  >
                    The
                  </Tag>
                </div>
                <div>
                  <Tag
                    addStyle={{
                      background: '#0e1731',
                      fontSize: '100px',
                      color: '#fff',
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}
                  >
                    Players
                  </Tag>
                </div>
                <div>
                  <Tag
                    addStyle={{
                      background: '#fff',
                      fontSize: '27px',
                      color: '#0e1731',
                      display: 'inline-block',
                      marginBottom: '27px',
                      border: '1px solid #0e1731'
                    }}
                    link="/the_team"
                  >
                    Meet them here
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default MeetPlayers;
