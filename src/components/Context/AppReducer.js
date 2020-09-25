export default (state, action) => {
  switch (action.type) {
    case "TOGGLE_THE_BURGER_MENU_SVG":
      return {
        ...state,
        initialState: !state.initialState,
      };
    default:
      return state;
  }
};
