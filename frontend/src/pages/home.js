import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>
          Hello! Welcome to Daily Plan<br/>
          You can easily plan your day with it
        </h1>
        <h3>
          To start you need to create a new profile,<br/>
          or login with your current.
        </h3>
        <Link className="home-to-login" to="/login">START</Link>
      </div>
    );
  }
}

export default Home;