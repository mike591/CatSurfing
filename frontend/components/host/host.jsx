import React from 'react';
import Header from '../header/header_container';
import {hashHistory} from 'react-router'
import HostProfile from './host_profile'
import ReactStars from 'react-stars'


class Host extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cat_id: '',
      start: '',
      end: '',
      bookingErrors: '',
      rating: 0,
      review: '',
      reviewErrors: ''
    }

    this.handleCreateBooking = this.handleCreateBooking.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCreateReview = this.handleCreateReview.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
  }

  componentWillMount(){
    this.props.getHost(this.props.host_id)
    this.props.getCats()
  }

  handleCreateBooking(e) {
    e.preventDefault();
    let cat = this.state;
    let booking = { cat_id: cat.cat_id, start: cat.start, end: cat.end };
    if (typeof this.props.cats[cat.cat_id] === 'undefined') {
      this.setState({bookingErrors: ["Please Select a Cat to Book!"]})
      return
    }
    booking.cat_name = this.props.cats[cat.cat_id].name;
    booking.host_id = this.props.host_id;
    booking.host_name = this.props.host.username;
    booking.owner_email = this.props.currentUser.email;
    this.props.createBooking(booking).then(() => (
      hashHistory.push('/dashboard')
    ), (err) => (
      this.setState({bookingErrors: err.responseJSON})
    ))
  }

  handleCreateReview(e) {
    e.preventDefault();
    let review = {
      user_id: this.props.currentUser.id,
      host_id: this.props.host_id,
      rating: this.state.rating,
      review: this.state.review
    }
    this.props.createReview(review).then(() => (
      this.setState ({
        rating: 0,
        review: ''
      })
    ), (err) => (
      this.setState({reviewErrors: err.responseJSON})
    ));
  }

  handleChange(field) {
    return (e) => {
      e.preventDefault();
      let val = e.target.value
      this.setState({[field]: val});
    }
  }

  handleDelete(id) {
    return (e) => {
      e.preventDefault();
      this.props.deleteReview(id);
    }
  }

  ratingChanged(newRating) {
    this.setState({rating: newRating})
  }

  render() {
    let host = this.props.host;

    let catOptions = null
    if (Object.values(this.props.cats).length > 0) {
      catOptions = Object.values(this.props.cats).map((cat) => (
        <option key={cat.id} value={cat.id}>{cat.name}</option>
      ))
    }

    let bookingErrorList = [];
    if (this.state.bookingErrors) {
      bookingErrorList = this.state.bookingErrors.map((error) => (
        <li className='booking-error-list' key={error}>{error}</li>
      ))
    }

    let reviewList = [];
    let reviewed = false;
    if (Object.values(host).length > 0  && typeof host.reviews !== 'undefined') {
      host.reviews.forEach((review) => {
        let stars = []
        for (var i = 0; i < review.rating; i++) {
          stars.push(<span className='stars' key={i}>&#9734;</span>)
        }

        let del;
        if (this.props.currentUser !== null) {
          if (review.user_id === this.props.currentUser.id) {
            reviewed = true;
            del = <button className='delete-review-button' onClick={this.handleDelete(review.id)}>Delete</button>
          }
        }

        reviewList.push (
          <li className='review-list' key={review.id}>
            <h1>{stars}</h1>
            <p>{review.review}</p>
            {del}
          </li>
        )
      })
    }

    let reviewForm = <div></div>
    if (!reviewed) {
      reviewForm = (
        <form className='host-review-form' onSubmit={this.handleCreateReview}>
          <div className='star-container'>
            <ReactStars
              count={5}
              value={this.state.rating}
              onChange={this.ratingChanged}
              size={24}
              half={false}
              color2={'#ffd700'} />
          </div>
          <br></br>
          <textarea onChange={this.handleChange('review')} placeholder='Type review here' value={this.state.review}/>
          <input className='active-form-submit' type='submit' value='Create Review!' />
        </form>
      )
    }

    let reviewErrorList = [];
    if (this.state.reviewErrors) {
      reviewErrorList = this.state.reviewErrors.map((error) => (
        <li key={error}>{error}</li>
      ))
    }

    return (
      <div className='host-page'>
        <Header />
        <div className='host-page-main'>
          <div className='host-page-left'>
            <HostProfile host={host}/>
          </div>

          <div className='host-page-right'>

            <div className='host-schedule'>
              <h1 className='host-page-title'>Create a Booking!</h1>
              <form onSubmit={this.handleCreateBooking}>
                <select className='host-schedule-select' onChange={this.handleChange("cat_id")}>
                  <option selected disabled>Select a Cat!</option>
                  {catOptions}
                </select>
                <br></br>
                <span className='schedule-date-span'>Start Date</span><input className='schedule-date' required onChange={this.handleChange("start")} type='date'/>
                <br></br>
                <span className='schedule-date-span'>End Date</span><input className='schedule-date' required onChange={this.handleChange("end")} type='date'/>
                <br></br>
                <input type='submit' value='Create Booking!'/>
              </form>
              <ul>
                {bookingErrorList}
              </ul>
            </div>

            <div className='host-overview'>
              <h1 className='host-page-title'>Host Reviews</h1>
              <ul className='review-list-container'>
                {reviewList}
              </ul>
              <ul>
                {reviewErrorList}
              </ul>
              {reviewForm}
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
