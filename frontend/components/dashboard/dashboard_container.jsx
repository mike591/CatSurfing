import { connect } from 'react-redux';
import Dashboard from './dashboard';
import {logout} from '../../actions/session_actions';
import {getCats, createCat, updateCat, deleteCat} from '../../actions/cat_actions';

const mapStateToProps = (state) => ({
 currentUser: state.session.currentUser,
 cats: state.cats
});

const mapDispatchToProps = (dispatch) => ({
  logout: () =>  dispatch(logout()),
  getCats: () => dispatch(getCats()),
  createCat: (cat) => dispatch(createCat(cat)),
  updateCat: (cat) => dispatch(update(cat)),
  deleteCat: (id) => dispatch(deleteCat(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
