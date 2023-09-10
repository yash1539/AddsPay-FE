import React, { useEffect, useState } from 'react';
import Footer from "./components/comman/Footer";

import Navbar from "./components/comman/Navbar";
import { Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import {  onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

// Initialize Firebase
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
     console.log(user);
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // No user is signed in.
        setUser(null);
      }
    });

    // Clean up the subscription when the component unmounts.
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Navbar user={user}/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
