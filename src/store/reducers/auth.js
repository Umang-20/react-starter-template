import Types from "../types/auth";

const initialState = {
  user: null,
};

const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.SET_USER_DATA:
      return {
        ...state,
        user: payload.user,
      };
    case Types.LOG_OUT_USER: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
