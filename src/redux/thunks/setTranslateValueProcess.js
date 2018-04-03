export default function setTranslateValueProcess(value) {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_TRANSLATE_VALUE', translateValue: value });
  };
}
