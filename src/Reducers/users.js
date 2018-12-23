import * as Types from "../Constains/ActionTypes";
let initialState = [];

const dataUser = (state = initialState, action) => {
  switch (action.type) {
    case Types.SIGNUP_ACCOUNT:
      return [...state];

    default:
      return state;
  }
};

export default dataUser;
