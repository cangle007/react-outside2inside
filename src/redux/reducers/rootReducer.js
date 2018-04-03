export default function rootReducer(
  currentState = {
    users: [],
    images: [],
    index: 0,
    translateValue: 0,
    autoplay: false,
    coolButtons: false
  },
  action
) {
  switch (action.type) {
    case 'FETCHED_USERS':
      return { ...currentState, users: action.users };
    case 'GET_IMAGES_SUCCESS':
      return { ...currentState, images: action.images };
    case 'SET_TRANSLATE_VALUE':
      return { ...currentState, translateValue: action.translateValue };
    case 'SET_INDEX':
      return { ...currentState, index: action.index };
    case 'TOGGLE_AUTOPLAY':
      return { ...currentState, autoplay: action.payload };

    // case 'TOGGLE_SETTING':
    //   return { ...currentState, showDots: !action.showDots };

    default:
      return currentState;
  }
}
