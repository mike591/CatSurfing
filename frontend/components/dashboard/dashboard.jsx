import React from 'react';
import { Link } from 'react-router';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {

    return(
      <div>
        <h1>Dashboard</h1>
      </div>
    )
  }
}

export default Dashboard;
