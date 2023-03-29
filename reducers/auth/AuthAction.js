import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../../utils/Config";
export const Login = (email, password) => {
  return async (dispatch) => {
    let token = null;
    try {
      const result = await fetch(`${API_URL}auth/login`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }), 
      });
      const resData = await result.json();

      if (resData.success === false) {
        // console.log('Unable to fetch')
        dispatch({
          type: "AUTH_LOADING",
        });
      }
      //console.log(resData);
      token = resData.access_token;
      await AsyncStorage.setItem("token", token);
      console.log("token storage");
      dispatch({
        type: "login",
        payload: token,
      });
    } catch (err) {
      throw err;
    }
  };
};
export const Init = () => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem("token");
    if (token !== null) {
      console.log("token fetch");
      console.log(token);
      dispatch({
        type: "login",
        payload: token,
      });
    }
  };
};
export const Logout = () => {
  return async (dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: "logout",
    });
  };
};
