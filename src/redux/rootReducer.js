import { combineReducers } from "redux";

import userReducer from "./../redux/User/user.reducer";

export default combineReducers({
  user: userReducer,
});
