import React from 'react';
import Header from '../header/header_container';
import {hashHistory} from 'react-router'

class Host extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cat_id: '',
      host_id: '',
      host_name: '',
      start: '',
      end: '',
      errors: ''
    }

    this.handleCreateBooking = this.handleCreateBooking.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    this.props.getHost(this.props.host_id)
    this.props.getCats()
  }

  handleCreateBooking(e) {
    e.preventDefault();
    let cat = this.state;
    let booking = { cat_id: cat.cat_id, start: cat.start, end: cat.end };
    booking.host_id = this.props.host_id;
    booking.host_name = this.props.host.username;
    this.props.createBooking(booking).then(() => (
      hashHistory.push('/dashboard')
    ), (err) => (
      this.setState({errors: err.responseJSON})
    ))
  }

  handleChange(field) {
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value})
    }
  }

  render() {
    let host = this.props.host;
    let catOptions;
    if (Object.values(this.props.cats).length === 0) {
      catOptions = null
    } else {
      catOptions = Object.values(this.props.cats).map((cat) => (
        <option key={cat.id} value={cat.id}>{cat.name}</option>
      ))
    }

    let errorList = [];
    if (this.state.errors) {
      errorList = this.state.errors.map((error) => (
        <li key={error}>{error}</li>
      ))
    }



    return (
      <div className='host-page'>
        <Header />
        <div className='host-page-main'>
          <div className='host-page-left'>
            <div className='host-profile'>
              <h1 className='host-page-title'>Host {host.username}</h1>
              <h2>Address: {`${host.city}, ${host.state}, ${host.zip}`}</h2>
              <h2>Email: {host.email}</h2>
              <h2>Status: {host.status}</h2>
            </div>
          </div>

          <div className='host-page-right'>
            <div className='host-schedule'>
              <h1 className='host-page-title'>Create a Booking!</h1>
              <form onSubmit={this.handleCreateBooking}>
                <select required onChange={this.handleChange("cat_id")}>
                  <option selected disabled>----- Select a Cat! -----</option>
                  {catOptions}
                </select>
                <br></br>
                <label>Start Date
                  <input required onChange={this.handleChange("start")} type='date'/>
                </label>
                <br></br>
                <label>End Date
                  <input required onChange={this.handleChange("end")} type='date'/>
                </label>
                <br></br>
                <input type='submit' value='Create Booking!'/>
              </form>
              <ul>
                {errorList}
              </ul>
            </div>

            <div className='host-overview'>
              <h1 className='host-page-title'>Host Reviews</h1>
            </div>

            <div className='host-about'>
              <h1 className='host-page-title'>Host's Profile</h1>
              <p>{host.profile}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Host;
