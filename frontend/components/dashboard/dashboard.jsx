import React from 'react';
import { Link, hashHistory } from 'react-router';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout().then(() => (
      hashHistory.push("/")
    ))
  }

  render() {

    return(
      <div>
        <h1>Dashboard</h1>
        <button onClick={this.logout}>Log Out</button>
      </div>
    )
  }
}

export default Dashboard;
