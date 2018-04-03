export default function setIndexProcess(value) {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_INDEX', index: value });
  };
}
