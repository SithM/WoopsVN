import * as Types from "../Constains/ActionTypes";
import callApi from "../Utils/API/ApiCaller";

//sign in api caller
export const signUpRequest = dataUser => {
  return dispatch => {
    //callApi(endpoint, method, header, body)
    return callApi("/gate/register", "POST", null, dataUser).then(res => {
      dispatch(actSignUpAccount(res.data));
    });
  };
};

export const actSignUpAccount = dataUser => {
  console.log("Data User:");
  console.log(dataUser);
  return {
    type: Types.SIGNUP_ACCOUNT,
    dataUser
  };
};
