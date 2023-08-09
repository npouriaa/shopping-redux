import { authActions } from "../redux/authSlice";
import * as emailValidator from "email-validator";
import { createContext, useEffect } from "react";
import { loaderActions } from "../redux/loaderSlice";
import { notificationActions } from "../redux/notificationSlice";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const AuthContext = createContext();

const validator = (email, password, dispatch) => {
  const emailState = dispatch(
    authActions.setEmailError(
      email === "" || !emailValidator.validate(email) ? true : false
    )
  );
  const passwordState = dispatch(
    authActions.setPasswordError(
      password.length < 6 || password === "" ? true : false
    )
  );
  if (!emailState.payload && !passwordState.payload) {
    return true;
  }
  return false;
};

const authorization = async (
  authMethod,
  email,
  password,
  dispatch,
  message,
  navigate
) => {
  dispatch(loaderActions.setLoading(true));
  try {
    const response = await authMethod(auth, email, password);
    if (authMethod === createUserWithEmailAndPassword) {
      const docRef = doc(db, "usersCarts", response.user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, { cart: [] });
      }
    }
    dispatch(authActions.setEmail(""));
    dispatch(authActions.setPassword(""));
    dispatch(notificationActions.setSeverity("success"));
    dispatch(notificationActions.setMessage(message));
    navigate('/')
  } catch (err) {
    dispatch(notificationActions.setSeverity("error"));
    dispatch(notificationActions.setMessage(err.message));
  }
  dispatch(loaderActions.setLoading(false));
  dispatch(notificationActions.setOpen(true));
};

const AuthContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const unSub = onAuthStateChanged(auth, (user) => {
    dispatch(authActions.setCurrentUser(user));
  });

  useEffect(() => {
    unSub();
  }, []);

  return (
    <AuthContext.Provider value={{ validator, authorization, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
