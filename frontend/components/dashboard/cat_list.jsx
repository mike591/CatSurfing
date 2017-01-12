import React from 'react';
import merge from 'lodash/merge'

class CatList extends React.Component {
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
    this.deleteCat = this.deleteCat.bind(this);
  }

  addCat(e) {
    e.preventDefault();
    this.props.createCat(this.state.cat).then(() => (
      this.setState({
        cat: {
          name: "",
          description: ""
        }
      })
    ));
  }

  deleteCat(id) {
    return (e) => {
      e.preventDefault();
      this.props.deleteCat(id);
    };
  }

  handleCat(field) {
    return (e) => {
      let newState = merge({}, this.state.cat, {[field]: e.target.value})
      this.setState({cat: newState});
    };
  }

  componentWillMount() {
    this.props.getCats();
  }


  render() {
    let cats;
    let catKeys = Object.keys(this.props.cats);
    if (catKeys.length > 0) {
      cats = catKeys.map((key) => (
        <li key={key}>
          <h1>{this.props.cats[key].name}</h1>
          <p>{this.props.cats[key].description}</p>
          <button onClick={this.deleteCat(key)}>Delete</button>
        </li>
      ))
    }

    return (
      <div>
        <ul>
          {cats}
        </ul>
        <br></br>
        <form onSubmit={this.addCat} className='dashboard-catForm'>
          <input onChange={this.handleCat('name')} type='text' placeholder='Name' value={this.state.cat.name} />
          <input onChange={this.handleCat('description')} type='text' placeholder='Description' value={this.state.cat.description} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default CatList;
