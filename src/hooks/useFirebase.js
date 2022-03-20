import { useState, useEffect } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";


// initialize firebase app
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const googleProvider = new GoogleAuthProvider();

    // Resister
    const resisterUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);

            // send name to firebase  after creation
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              }).catch((error) => {
                
              });
            history.replace('/');
          })
          
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally (() => setIsLoading(false));
    }


    // Login
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally (() => setIsLoading(false));
    }


    // Google Sign In
    const signInWithGoogle = (location, history) =>  {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally (() => setIsLoading(false));
    }


    // observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
               setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    },[])


    // LogOut
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        resisterUser,
        loginUser,
        signInWithGoogle,
        logOut,
        authError,
    }

}

export default useFirebase;