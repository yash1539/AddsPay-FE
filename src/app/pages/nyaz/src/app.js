import React from "react";
import  ReactDOM  from "react-dom/client"
import Header from "./Components/header";
import Footer from "./Components/Footer";
import HeaderSection from "./Components/HeaderSection";
const App = ()=>{
    return (
        <div className="root">
            <Header/>
            <HeaderSection/>
           <Footer/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);
