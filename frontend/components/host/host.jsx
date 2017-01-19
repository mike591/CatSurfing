import React from 'react';
import Header from '../header/header_container';
import {hashHistory} from 'react-router'
import HostProfile from './host_profile'


class Host extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cat_id: '',
      start: '',
      end: '',
      errors: '',
      rating: 1,
      review: ''
    }

    this.handleCreateBooking = this.handleCreateBooking.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCreateReview = this.handleCreateReview.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount(){
    this.props.getHost(this.props.host_id)
    this.props.getCats()
  }

  componentWillUpdate(nextProps){

  }

  handleCreateBooking(e) {
    e.preventDefault();
    let cat = this.state;
    let booking = { cat_id: cat.cat_id, start: cat.start, end: cat.end };
    booking.cat_name = this.props.cats[cat.cat_id].name;
    booking.host_id = this.props.host_id;
    booking.host_name = this.props.host.username;
    booking.owner_email = this.props.currentUser.email;
    this.props.createBooking(booking).then(() => (
      hashHistory.push('/dashboard')
    ), (err) => (
      this.setState({errors: err.responseJSON})
    ))
  }

  handleCreateReview(e) {
    e.preventDefault();
    let review = {
      user_id: this.props.currentUser.id,
      host_id: this.props.host_id,
      rating: parseInt(document.querySelector('input[name="rating"]:checked').value),
      review: this.state.review
    }
    this.props.createReview(review).then(() => (
      this.setState ({
        rating: 1,
        review: ''
      })
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

    let reviewList = [];
    let reviewed = false;
    if (Object.values(host).length > 0  && typeof host.reviews !== 'undefined') {
      host.reviews.forEach((review) => {
        let stars = []
        for (var i = 0; i < review.rating; i++) {
          stars.push(<span key={i}>&#9734;</span>)
        }

        let del;
        if (review.user_id === currentUser.id) {
          reviewed = true;
          del = <button className='delete-review-button' onClick={this.handleDelete(review.id)}>Delete</button>
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

    let starContainer = [];
    for (let i = 1; i <= 5; i++) {
      if (this.state.rating === i) {
        starContainer.push(
          <input key={i} className='star-radio' type="radio" name="rating" value={i} defaultChecked={true}/>
        )
      } else {
        starContainer.push(
          <input key={i} className='star-radio' type="radio" name="rating" value={i} defaultChecked={false}/>
        )
      }
    }

    let reviewForm = <div></div>
    if (!reviewed) {
      reviewForm = (
        <form className='host-review-form' onSubmit={this.handleCreateReview}>
          <div className='star-container'>
            {starContainer}
          </div>
          <br></br>
          <textarea onChange={this.handleChange('review')} placeholder='Type review here' value={this.state.review}/>
          <input className='active-form-submit' type='submit' value='Create Review!' />
        </form>
      )
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
                {errorList}
              </ul>
            </div>

            <div className='host-overview'>
              <h1 className='host-page-title'>Host Reviews</h1>
              <ul className='review-list-container'>
                {reviewList}
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