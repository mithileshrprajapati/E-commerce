import { combineReducers } from "redux";

import userReducer from "../Redux/user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
});
export default rootReducer;
