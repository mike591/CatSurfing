import {connect} from 'react-redux';
import { login, signup, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});}

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: (user) => dispatch(processForm(user)),
    login: (user) => dispatch(login(user)),
    formType: formType,
    removeErrors: () => dispatch(removeErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
