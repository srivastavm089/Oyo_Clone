import {
  HOTEL_BY_PRICE_FAIL,
  HOTEL_BY_PRICE_REQUEST,
  HOTEL_BY_PRICE_SUCCESS,
  SERACH_HOTEL_FAIL,
  SERACH_HOTEL_REQUEST,
  SERACH_HOTEL_SUCCESS,
} from "../constant/hotelContant";

export const hotelReducer = (state = { hotels: [] }, action) => {
  switch (action.type) {
    case HOTEL_BY_PRICE_REQUEST:
    case SERACH_HOTEL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case HOTEL_BY_PRICE_SUCCESS:
    case SERACH_HOTEL_SUCCESS:
      return {
        ...state,
        loading: false,
        hotels: [...action.payload],
      };
    case HOTEL_BY_PRICE_FAIL:
    case SERACH_HOTEL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
