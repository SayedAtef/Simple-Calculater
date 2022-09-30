const toggleReducer = (state, action) => {
  switch (action.type) {
    case "THEME_ONE":
      return {
        ...state,
        one: true,
        two: false,
        three: false,
      };
    case "THEME_TWO":
      return {
        ...state,
        one: false,
        two: true,
        three: false,
      };
    case "THEME_THREE":
      return {
        ...state,
        one: false,
        two: false,
        three: true,
      };
    default:
      return state;
  }
};

export default toggleReducer;
