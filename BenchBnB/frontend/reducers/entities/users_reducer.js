import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

export default (state = {}, action) => {
	Object.freeze(state);
	// const newState = merge({}, state);
	switch (action.type) {
		case RECEIVE_CURRENT_USER:
			return merge({}, state, { [action.user.id]: action.user });
		default:
			return state;
	}
};
