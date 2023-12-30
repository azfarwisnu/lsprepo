const init_state = {
    template: "",
    ignore: "",
  };
  
  const reducer = (state = init_state, action) => {
    switch (action.type) {
      case "GET_RESPONSE":
        return { ...state, template: action.template, ignore: action.ignore };
      default:
          return state;
    }
  };
  
  
  export default reducer;