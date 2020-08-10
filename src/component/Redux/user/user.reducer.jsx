import { userActionTypes } from "./user.types";
const INITIAL_STATE = {
	currentUser: null,
};

const cartReducer = (prevState = INITIAL_STATE, action) => {
	switch (action.type) {
		case userActionTypes.SET_CURRENT_USER:
			return {
				...prevState,
				currentUser: action.payload,
			};

		default:
			return prevState;
	}
};
export default cartReducer;
