import * as Types from "../Constains/ActionTypes";
let initialState = [];

const dataUser = (state = initialState, action) => {
  switch (action.type) {
    case Types.SIGNUP_ACCOUNT:
      console.log(state);
      return [...state];

    case Types.SIGNIN_ACCOUNT:
      console.log(state);
      return [...state];

    default:
      return state;
  }
};

export default dataUser;
