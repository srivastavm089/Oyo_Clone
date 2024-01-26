import axios from "axios";
import {
  HOTEL_BY_PRICE_REQUEST,
  HOTEL_BY_PRICE_SUCCESS,
  HOTEL_BY_PRICE_FAIL,
  SERACH_HOTEL_REQUEST,
  SERACH_HOTEL_SUCCESS,
  SERACH_HOTEL_FAIL,
  CATEGORY_HOTEL_REQUEST,
  CATEGORY_HOTEL_SUCCESS,
  CATEGORY_HOTEL_FAIL,
} from "../constant/hotelContant";


//gethotel by price user

export const getHotelPrice = (value) => async (dispatch ,  getState) => {
 // get acccess has acces of reducer state data 
  try {
    dispatch({
      type: HOTEL_BY_PRICE_REQUEST,
    });

    const { data } = await axios.get(
      `http://localhost:3000/api/filter?price=${value}`
    );
  setTimeout(()=>{

    dispatch({ type: HOTEL_BY_PRICE_SUCCESS, payload: data.hotel });
  },1000)
  } catch (err) {
    dispatch({
      type: HOTEL_BY_PRICE_FAIL,
      error: "something went wrong",
    });
  }
};

// search hotel user 
export const searchHotel = (value) => async (dispatch ,  getState) => {
    // get acccess has acces of reducer state data 
     try {
       dispatch({
         type: SERACH_HOTEL_REQUEST,
       });
   
       const { data } = await axios.get(
        `http://localhost:3000/api/filter/${value}`
       );

       console.log(data)
    //  setTimeout(()=>{
   
       dispatch({ type: SERACH_HOTEL_SUCCESS, payload: data.hotels });
    //  },1000)
     } catch (err) {
       dispatch({
         type: SERACH_HOTEL_FAIL,
         error: "something went wrong",
       });
     }
   };



   export const collectionFilter = (value) => async (dispatch ,  getState) => {
    // get acccess has acces of reducer state data 
     try {
       dispatch({
         type: CATEGORY_HOTEL_REQUEST,
       });
       const { data } = await axios.get(
        `http://localhost:3000/api/filter?col=${value}`
       );

       console.log(data)
       
   
     

  
   
    
     } catch (err) {
       dispatch({
         type: CATEGORY_HOTEL_FAIL,
         error: "something went wrong",
       });
     }
   };
   