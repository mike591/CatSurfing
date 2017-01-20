import { connect } from 'react-redux';
import Host from './host';
import { clearHost, getHosts, getHost, createReview, updateReview, deleteReview } from '../../actions/host_actions';
import { getCats, createBooking } from '../../actions/cat_actions';

const mapStateToProps = (state, ownProps) => {

  return ({
    currentUser: state.session.currentUser,
    host_id: ownProps.params.id,
    host: state.hosts.host,
    cats: state.cats
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearHost: () => dispatch(clearHost()),
  getHosts: (city) => dispatch(getHosts(city)),
  getHost: (id) => dispatch(getHost(id)),
  getCats: () => dispatch(getCats()),
  createBooking: (booking) => dispatch(createBooking(booking)),
  createReview: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  deleteReview: (review) => dispatch(deleteReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(Host);
