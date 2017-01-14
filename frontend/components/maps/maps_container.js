import { connect } from 'react-redux';
import Maps from './maps';

const mapStateToProps = (state, ownProps) => ({
  hosts: state.hosts
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Maps);
