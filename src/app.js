import Footer from "./components/comman/Footer";
import './App.css';
import Navbar from "./components/comman/Navbar";
import CategoryCard from "./components/comman/CategoryCard";
function App() {
  return (
    <div className="App">
            <Navbar/>
           <CategoryCard/>
           <Footer/>
        </div>
  
  );
}

export default App;
