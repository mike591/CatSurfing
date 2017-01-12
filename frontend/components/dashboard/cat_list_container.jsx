import { connect } from 'react-redux';
import { getCats, createCat, updateCat, deleteCat } from '../../actions/cat_actions';
import CatList from './cat_list';

const mapStateToProps = (state) => ({
  cats: state.cats
});

const mapDispatchToProps = (dispatch) => ({
  getCats: () => dispatch(getCats()),
  createCat: (cat) => dispatch(createCat(cat)),
  updateCat: (cat) => dispatch(update(cat)),
  deleteCat: (id) => dispatch(deleteCat(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatList);
