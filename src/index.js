import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import ContactUs from "./components/pages/ContactUs";
import AboutUs from "./components/pages/AboutUs";
import ListingPage from "./components/listing/ListingPage";
import AdminDashboard from "./components/adminlayout/AdminDashboard";
import PageNotFound from "./components/pages/PageNotFound";
import Login from "./components/comman/Login";
import Home from './components/pages/Home';
import PricingPlan from './components/pages/PricingPlan';
import ContactForm from './components/comman/ContactForm';
import App from './App';
import ListingForm from './components/adminlayout/listingform/ListingForm';
import BussinessDetail from './components/adminlayout/listingform/BussinessDetail';
const appRouter = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    errorElement: <PageNotFound />, 
    children: [
      {
        path: "/",
        element: <Home />,
      },
     
      {
        path: "about",
        element: <AboutUs />,

      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "contact-form",
        element: <ContactForm />,
      },
      {
        path: "pricing",
        element: <PricingPlan />,
      },
      {
        path: "listing",
        element: <ListingPage />,
      },
      {
        path: "bussinessDetail",
        element: <BussinessDetail />,
      },
      {
        path: "listing-form",
        element: <ListingForm />,
      },
    ],
  },
  {
    path: "/Admin",
    element: <AdminDashboard />,
    children:[
      {
        path: "contact-form",
        element: <ContactForm />,
      },
    ]
  },
  {
    path: "contact-form",
    element: <ContactForm />,
  },

 
  {
    path: "login",
    element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
