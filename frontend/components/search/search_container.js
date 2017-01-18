import { connect } from 'react-redux';
import Search from './search';
import {clearHost, getHosts, getHost} from '../../actions/host_actions';

const mapStateToProps = (state, ownProps) => {
  
  let query = Object.values(ownProps.location.query).join('').split(',');
  return ({
    hosts: state.hosts,
    city: query[0],
    state: query[1],
    country: query[2]
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearHost: () => dispatch(clearHost()),
  getHosts: (city) => dispatch(getHosts(city)),
  getHost: (id) => dispatch(getHost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
