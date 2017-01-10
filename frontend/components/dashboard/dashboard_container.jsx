import { connect } from 'react-redux';
import Dashboard from './dashboard';
import {signup, login, logout} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
 currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch(signup()),
  login: () =>  dispatch(login()),
  logout: () =>  dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
