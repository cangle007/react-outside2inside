export default function getSliderImagesProcess() {
  return (dispatch, getState) => {
    let imagesData = [
      'rockets-in-the-sky',
      'oriens-belt',
      'aurora',
      'galaxies',
      'martin'
    ];
    dispatch({ type: 'GET_IMAGES_SUCCESS', images: imagesData });
  };
}
