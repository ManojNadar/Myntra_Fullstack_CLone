import React, { createContext, useEffect, useReducer } from "react";

export const MyntraContext = createContext();

const initialState = { currentuser: null };
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        currentuser: action.payload,
      };

    case "LOGOUT":
      return {
        currentuser: null,
      };

    default:
      return state;
  }
};

const MyContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const login = (userData) => {
    localStorage.setItem("currentmyntrauser", JSON.stringify(userData));
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  };
  const logout = () => {
    localStorage.removeItem("currentmyntrauser");
    dispatch({
      type: "LOGOUT",
    });
  };

  useEffect(() => {
    const getmyntraUser = JSON.parse(localStorage.getItem("currentmyntrauser"));
    if (getmyntraUser) {
      dispatch({
        type: "LOGIN",
        payload: getmyntraUser,
      });
    }
  }, []);

  return (
    <>
      <MyntraContext.Provider value={{ state, login, logout }}>
        {children}
      </MyntraContext.Provider>
    </>
  );
};

export default MyContext;
