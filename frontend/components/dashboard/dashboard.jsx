import React from 'react';
import { Link, hashHistory } from 'react-router';
import Header from '../header/header_container';
import merge from 'lodash/merge'
import CatListContainer from './cat_list_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: this.props.currentUser
    }

    this.handleStatus = this.handleStatus.bind(this);
    this.handleDeleteBooking = this.handleDeleteBooking.bind(this);
    this.handleNavToHost = this.handleNavToHost.bind(this);
  }

  handleStatus(e) {
    e.preventDefault();
    let updatedUser = merge({}, this.state.currentUser);
    updatedUser.status = e.target.value;
    this.props.edit(updatedUser);
  }

  handleDeleteBooking(id) {
    return (e) => {
      e.preventDefault();
      this.props.deleteBooking(id);
    }
  }

  handleNavToHost(id) {
    return (e) => {
      e.preventDefault();
      hashHistory.push(`/host/${id}`)
    }
  }

  render() {
    if (!this.props.currentUser) {
      return (<div></div>);
    }

    let currentUser = this.props.currentUser;
    let address = `${currentUser.city}, ${currentUser.state}, ${currentUser.zip}`;
    let status = currentUser.status;
    let cats = Object.values(this.props.cats);

    let catBookings = []
    if (cats.length > 0) {
      cats.forEach((cat) => {
        cat.bookings.forEach((booking) => {
          catBookings.push (
            <li key={booking.id} onClick={this.handleNavToHost(booking.host_id)}>
              <h1 className='dashboard-name'>{cat.name}</h1>
              <h2 className='dashboard-booking-details'>Staying with: {booking.host_name}</h2>
              <h2 className='dashboard-booking-details'>From: {booking.start} --- To: {booking.end}</h2>
              <button className='form-button-danger' onClick={this.handleDeleteBooking(booking.id)}>Delete Booking</button>
            </li>
          )
        })
      })
    } else {
      catBookings.push ( <li key={-1}>You have no bookings yet :(</li> );
    }

    let guests = []
    if (currentUser.bookings.length > 0) {
      currentUser.bookings.reverse().forEach((booking) => {
        guests.push (
          <li key={booking.id}>
            <h1 className='dashboard-name'>{booking.cat_name}</h1>
            <h2 className='dashboard-booking-details'>From: {booking.start} --- To: {booking.end}</h2>
            <h2 className='dashboard-booking-details'>{booking.owner_email}</h2>
          </li>
        )
      })
    } else {
      guests.push (
        <li key={-1}>You have no upcoming guests :(</li>
      )
    }

    return(
      <div className='dashboard'>

        <Header />

        <div className='dashboard-content'>

          <div className='dashboard-content-left'>
            <div className='dashboard-profile'>
              <h1 className='dashboard-title'>{currentUser.username}</h1>

              <h2 className='dashboard-profile-details'>{address}</h2>
              <select onChange={this.handleStatus} className='dashboard-status' value={status}>
                <option value="Accepting Guests">Accepting Guests</option>
                <option value="Maybe Accepting Guests">Maybe Accepting Guests</option>
                <option value="Not Accepting Guests">Not Accepting Guests</option>
              </select>
            </div>
            <div className='dashboard-cats'>
              <h1 className='dashboard-title'>My Cats</h1>
              <br></br>

              <CatListContainer />
            </div>
          </div>

          <div className='dashboard-content-right'>
            <div className='dashboard-plans'>
              <h1 className='dashboard-title'>My Cat's Bookings</h1>
              <ul>
                {catBookings}
              </ul>
            </div>
            <div className='dashboard-guests'>
              <h1 className='dashboard-title'>Cats Booked To Me</h1>
              <ul>
                {guests}
              </ul>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default Dashboard;
