import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { firebase } from '../../firebase';

const AdminNav = () => {
  const links = [
    {
      title: 'Matches',
      link: '/admin_matches'
    },
    {
      title: 'Add match',
      link: '/admin_matches/edit_match'
    },
    {
      title: 'Players',
      link: '/admin_players'
    },
    {
      title: 'Add players',
      link: '/admin_matches/add_players'
    }
  ];

  const style = {
    color: '#fff',
    fontWeight: '300',
    borderBottom: '1px solid #353535'
  };

  const renderItems = () =>
    links.map(link => (
      <Link to={link.link} key={link.title}>
        <ListItem style={style} button>
          {link.title}
        </ListItem>
      </Link>
    ));

  const logoutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('logout successfully');
      })
      .catch(error => {
        console.table('Error logout');
        console.table(error);
      });
  };

  return (
    <div>
      {renderItems()}
      <ListItem button style={style} onClick={() => logoutHandler()}>
        Log out
      </ListItem>
    </div>
  );
};

export default AdminNav;
