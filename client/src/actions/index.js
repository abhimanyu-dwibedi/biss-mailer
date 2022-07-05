import axios from "axios";
import { FETCH_USER } from "./type";
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/curr");

  console.log("hdsi");
  console.log("this is reqtuen" + res);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  // console.log("hi i am in ");
  console.log(token);
  // const pi = await axios.post("/api/pi");
  // console.log(pi);
  // const res = await axios.post("/api/conform");
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};
