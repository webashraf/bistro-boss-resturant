import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SocialSignIn = () => {
    const {createUserWithGoogle} = useContext(AuthContext)
    const signUpWithGoogle = () => {
        createUserWithGoogle()
          .then((result) => {
            const logedInUser = result.user;
            const user = {name: logedInUser.displayName, email: logedInUser.email}
            fetch(`https://bistro-boss-server-mocha.vercel.app/user`, {
              method: 'POST',
              headers:{
                "Content-type" : "application/json"
              },
              body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => console.log(data))
          })
          .catch((error) => console.log(error));
      };
    return (
        <button onClick={signUpWithGoogle} className="btn">
        Google
      </button>
    );
};

export default SocialSignIn;