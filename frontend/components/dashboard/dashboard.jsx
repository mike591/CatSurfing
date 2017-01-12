import React from 'react';
import { Link, hashHistory } from 'react-router';
import Header from '../header/header_container';
import merge from 'lodash/merge'
import CatListContainer from './cat_list_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.currentUser) {
      return (<div></div>);
    }

    let currentUser = this.props.currentUser;
    let address = `${currentUser.address}, ${currentUser.city}, ${currentUser.state}, ${currentUser.zip}`;

    return(
      <div className='dashboard'>

        <Header />

        <div className='dashboard-content'>

          <div className='dashboard-content-left'>
            <div className='dashboard-profile'>
              <h1>{currentUser.username}</h1>
              <h2>{address}</h2>
            </div>
            <div className='dashboard-cats'>
              <h1>My Cats</h1>
              <br></br>

              <CatListContainer />
            </div>
          </div>

          <div className='dashboard-content-right'>
            <div className='dashboard-plans'>
              <h1>My Cat's Bookings</h1>
            </div>
            <div className='dashboard-guests'>
              <h1>Cats Booked To Me</h1>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default Dashboard;
