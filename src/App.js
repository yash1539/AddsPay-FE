import React from "react";
import Footer from "./components/comman/Footer";
// import "./App.css";
import Navbar from "./components/comman/Navbar";
import { Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
