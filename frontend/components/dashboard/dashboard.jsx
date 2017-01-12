import React from 'react';
import { Link, hashHistory } from 'react-router';
import Header from '../header/header_container';
import merge from 'lodash/merge'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cat: {
        name: "",
        description: ""
      }
    }

    this.addCat = this.addCat.bind(this);
    this.handleCat = this.handleCat.bind(this);
  }

  addCat(e) {
    e.preventDefault();
    
  }

  handleCat(field) {
    return (e) => {
      let newState = merge({}, this.state.cat, {[field]: e.target.value})
      this.setState({cat: newState});
    };
  }

  render() {
    console.log(this.state.cat);

    if (!this.props.currentUser) {
      return (<div></div>);
    }

    let currentUser = this.props.currentUser;
    let address = `${currentUser.address}, ${currentUser.city}, ${currentUser.state}, ${currentUser.zip}`;

    let cats = currentUser.cats.map((cat) => (
      <li key={cat.id}>
        <h1>
          Name: {cat.name}
        </h1>
        <p>Description: {cat.description}</p>
        <br></br>
      </li>
    ));

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

              <ul>
                {cats}
              </ul>
              <br></br>

              <form onSubmit={this.addCat} className='dashboard-catForm'>
                <input onChange={this.handleCat('name')} type='text' placeholder='Name' />
                <input onChange={this.handleCat('description')} type='text' placeholder='Description' />
                <input type='submit' />
              </form>
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
