import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HomePage from '../../components/HomePage';
import getSliderImagesProcess from '../thunks/getSliderImagesProcess.js';
import getLogosProcess from '../thunks/getLogosProcess.js';
import setTranslateValueProcess from '../thunks/setTranslateValueProcess.js';
import setIndexProcess from '../thunks/setIndexProcess.js';

function mapStateToProps(state, ownProps) {
  return {
    users: state.users,
    images: state.images,
    logoImages: state.logoImages
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    get_sliderImages: () => dispatch(getSliderImagesProcess()),
    get_logoImages: () => dispatch(getLogosProcess()),
    set_translateValue: value => dispatch(setTranslateValueProcess(value)),
    set_index: value => dispatch(setIndexProcess(value))
  };
}

const withlifecycle = lifecycle({
  componentDidMount(prevProps, prevState) {
    this.props.get_sliderImages();
    this.props.get_logoImages();
  }
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore, withlifecycle)(withRouter(HomePage));
