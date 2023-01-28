import {
  DECREMENT,
  DECREMENT_5,
  INCREMENT,
  INCREMENT_5,
  RESET,
} from "../types";

const initialSate = 0;

const contadorReducer = (state = initialSate, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENT_5:
      return state + action.payload;
    case DECREMENT_5:
      return state - action.payload;
    case RESET:
      return initialSate;
    default:
      return state;
  }
};

export default contadorReducer;
