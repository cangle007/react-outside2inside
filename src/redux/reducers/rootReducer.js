export default function rootReducer(
  currentState = {
    users: [],
    images: [],
    logoImages: []
  },
  action
) {
  switch (action.type) {
    case 'FETCHED_USERS':
      return { ...currentState, users: action.users };
    case 'GET_IMAGES_SUCCESS':
      return { ...currentState, images: action.images };
    case 'GET_LOGOS_SUCCESS':
      return { ...currentState, logoImages: action.logoImages };

    default:
      return currentState;
  }
}
