import { combineReducers } from "redux";

import userReducer from "../Redux/user/user.reducer";

const rootReducer = combineReducers({
	user: userReducer,
});
export default rootReducer;
