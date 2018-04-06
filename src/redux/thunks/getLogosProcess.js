export default function getLogosProcess() {
  return (dispatch, getState) => {
    let logoData = [
      // 'logo-1',
      // 'logo-2',
      // 'logo-3',
      // 'logo-4',
      // 'logo-5',
      // 'logo-6',
      // 'logo-7',
      // 'logo-8',
      // 'logo-9',
      'logo-10',
      'logo-11',
      'logo-12',
      'logo-13',
      'logo-14'
    ];
    dispatch({ type: 'GET_LOGOS_SUCCESS', logoImages: logoData });
  };
}
