import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HomePage from '../../components/HomePage';
import getSliderImagesProcess from '../thunks/getSliderImagesProcess.js';
import setTranslateValueProcess from '../thunks/setTranslateValueProcess.js';
import setIndexProcess from '../thunks/setIndexProcess.js';

function mapStateToProps(state, ownProps) {
  return {
    users: state.users,
    images: state.images,
    index: state.index,
    translateValue: state.translateValue,
    autoplay: state.autoplay,
    showDots: state.showDots,
    coolButtons: state.coolButtons
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    get_sliderImages: () => dispatch(getSliderImagesProcess()),
    set_translateValue: value => dispatch(setTranslateValueProcess(value)),
    set_index: value => dispatch(setIndexProcess(value))
  };
}

const withlifecycle = lifecycle({
  componentDidMount(prevProps, prevState) {
    this.props.get_sliderImages();
  }
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore, withlifecycle)(withRouter(HomePage));
