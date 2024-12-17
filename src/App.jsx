

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


import Aboutus from "./Components/Aboutus";
import Home from "./Components/Home";

import Apicall from "./Apicall";
import Cart from "./cart/Cart";
import Apicalling from "./Apicalling";




function App() {
  return (
    <Router>
      
      <nav className="bg-blue-500 p-4 text-white">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to ="/cart" className="hover:underline">Cart</Link></li>
        
        </ul>
      </nav>

   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route index element={<Apicall />} />
      
        <Route path="/cart" element={< Cart/>} />
       
      </Routes>
    </Router>
  );
}

export default App;
