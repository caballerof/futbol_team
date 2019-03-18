import React from 'react';
import { Tag } from '../../ui/misc';
import { Blocks } from './Blocks';

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag
          addStyle={{
            background: '#0e1731',
            fontSize: '35px',
            color: '#fff'
          }}
        >
          Matches
        </Tag>
        <Blocks />
        <Tag
          addStyle={{
            background: '#fff',
            fontSize: '22px',
            color: '#0e1731'
          }}
          link="/the_team"
        >
          See more marches
        </Tag>
      </div>
    </div>
  );
};

export default MatchesHome;
