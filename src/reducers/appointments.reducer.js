import {
  GET_ALL_APPOINTMENTS_PENDING,
  GET_ALL_APPOINTMENTS_SUCCESS,
  ADD_APPOINTMENT_PENDING,
  ADD_APPOINTMENT_SUCCESS,
  SORT_PAST_APPOINTMENTS_PENDING,
  SORT_PAST_APPOINTMENTS_SUCCESS
} from '../actions/appointments.actions'

export default(state = [], action) => {
  switch (action.type) {
    case GET_ALL_APPOINTMENTS_PENDING:
      return state;
    case GET_ALL_APPOINTMENTS_SUCCESS:
      return [...action.payload.data];
    case ADD_APPOINTMENT_PENDING:
      return state;
    case ADD_APPOINTMENT_SUCCESS:
      return [...state, action.payload.data]
    case SORT_PAST_APPOINTMENTS_PENDING:
      return state;
    case SORT_PAST_APPOINTMENTS_SUCCESS:
      return [...action.payload.data]
    default:
      return state;
  }
};
