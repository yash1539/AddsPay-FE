import React, { useEffect } from "react";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth , provider } from "../../firebase";

const Login = () => {
  const navigate = useNavigate();
    const routeToAdmin = () => {
      navigate('/admin');
    }
  const signInWithGoogle = () => {
   
    signInWithPopup(auth, provider).then((result) => {
     
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      result.user.getIdToken().then((idToken) => {
          localStorage.setItem("token", idToken);

      });
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("photo", profilePic);
      routeToAdmin()

    }).catch((error)=>{
        console.log(error);
    });
  }

  useEffect(() => {
  
  });
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="http://techiedom.com/addspay/uploads/website-images/logo-2023-08-18-12-12-06-6341.png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <form className="space-y-6" > */}
        
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             onClick={signInWithGoogle}
          >
            Sign in with Google
          </button>
        {/* </form> */}

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="/#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
