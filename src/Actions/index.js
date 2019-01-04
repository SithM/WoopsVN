import * as Types from "../Constains/ActionTypes";
import callApi from "../Utils/API/ApiCaller";

//sign up api caller
export const signUpRequest = dataUser => {
  return dispatch => {
    //callApi(endpoint, method, header, body)
    return callApi("gate/register", "POST", dataUser).then(res => {
      dispatch(actSignUpAccount());
    });
  };
};

export const actSignUpAccount = dataUser => {
  return {
    type: Types.SIGNUP_ACCOUNT,
    dataUser
  };
};

//sign in
export const signInRequest = dataUser => {
  const header = { "Content-Type": "application/json", lang: "en" };
  return dispatch => {
    //callApi(endpoint, method, header, body)
    return callApi("gate/login", "POST", dataUser).then(res => {
      dispatch(actSignInAccount());
    });
  };
};

export const actSignInAccount = dataUser => {
  return {
    type: Types.SIGNIN_ACCOUNT,
    dataUser
  };
};

//create woops
export const createWoopsRequest = (idToken, content) => {
  const header = {
    "Content-Type": "application/json",
    id_token: idToken,
    lang: "en"
  };
  return dispatch => {
    //callApi(endpoint, method, header, body)
    return callApi("woops", "POST", content).then(res => {
      dispatch(actCreateWoops());
    });
  };
};

export const actCreateWoops = data => {
  return { type: Types.WOOPS_CREATE, data };
};

//edit woops
export const editWoopsRequest = (idToken, key, content) => {
  const header = {
    "Content-Type": "application/json",
    id_token: idToken,
    lang: "en"
  };
  return dispatch => {
    //callApi(endpoint, method, header, body)
    return callApi(`woops/${key}`, "PUT", content).then(res => {
      dispatch(actCreateWoops());
    });
  };
};

export const actEditWoops = data => {
  return { type: Types.WOOPS_EDIT, data };
};

//delete woops
export const deleteWoopsRequest = (idToken, key) => {
  const header = {
    "Content-Type": "application/json",
    id_token: idToken,
    lang: "en"
  };
  return dispatch => {
    //callApi(endpoint, method, header, body)
    return callApi(`woops/${key}`, "DEL", null).then(res => {
      dispatch(actCreateWoops());
    });
  };
};

export const actDeleteWoops = data => {
  return { type: Types.WOOPS_DELETE, data };
};
