import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider;




const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user with email and password //
  const createUserEmailAndPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Create user with google //
  const createUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Login user with email and password //
  const loginWithEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Update user profile //
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    });
  }

  //  LogOut //
  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      // fetch(`http://localhost:5000/jwt`, {
      //   method: 'POST',
      //   headers: {
          
      //   }
      // })
      
      if (currentUser) {
        axios.post(`http://localhost:5000/jwt`, {email: currentUser.email})
        .then(data => {
          console.log(data)
          localStorage.setItem('token', data.data.token);
        })
      }
      else{
        localStorage.removeItem('token');
      }


      setLoading(false);
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
    loginWithEmailPass,
    createUserWithGoogle,
    updateUserProfile,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
