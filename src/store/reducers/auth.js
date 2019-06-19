import {
    ACTION1,
  } from "../actionTypes";
  
  const initialState = {
      items:[],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTION1:
        return ({
            items: state.items.concat(action.payload),
        });
      default:
        return state;
    }
  };
  
  export default reducer;
  