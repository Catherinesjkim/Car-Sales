// 1. Set up "empty" reducer and initial state
export const initialState = {
  header: '2019 Ford Mustang',
  editing: false
};

export const headerReducer = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    // case 'UPDATE_TITLE':
    //   return {
    //     ...state, 
    //     header: action.payload, 
    //     editing: false 
    //   };
    // NEW CASE HERE
    // case 'TOGGLE_EDITING':
    //   return {
    //     ...state, 
    //     editing: !state.editing
    //   };
    default: 
      return state;
  }
};