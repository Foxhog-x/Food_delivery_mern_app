 
import './App.css';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
 
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup';
import context from 'react-bootstrap-v5/lib/esm/AccordionContext';
import { CartProvider } from './components/ContextReducer';


function App() {
  return (
    <CartProvider>
     <Router>
     <div>
       <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Signup" element={<Signup/>}/>
        </Routes>
     </div>
     </Router>
     
     </CartProvider>
  );
}

export default App;
