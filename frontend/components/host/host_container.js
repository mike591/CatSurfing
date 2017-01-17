import { connect } from 'react-redux';
import Host from './host';
import { clearHost, getHosts, getHost } from '../../actions/host_actions';
import { getCats, createBooking } from '../../actions/cat_actions';

const mapStateToProps = (state, ownProps) => {

  return ({
    host_id: ownProps.params.id,
    host: state.hosts,
    cats: state.cats
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearHost: () => dispatch(clearHost()),
  getHosts: (city) => dispatch(getHosts(city)),
  getHost: (id) => dispatch(getHost(id)),
  getCats: () => dispatch(getCats()),
  createBooking: (booking) => dispatch(createBooking(booking))
});

export default connect(mapStateToProps, mapDispatchToProps)(Host);
