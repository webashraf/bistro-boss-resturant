import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider;
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user with email and password //
  const createUserEmailAndPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Create user with google //
  const createUserWithGoogle = (email, password) => {
    return signInWithPopup(auth, googleProvider);
  };

//  LogOut //
const logOut = () => {
    return signOut(auth)
}

  useEffect(  () => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log(currentUser);
    })
    return () => {
        return unSubscribe();
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUserEmailAndPass,
    createUserWithGoogle,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
