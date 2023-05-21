import logo from './logo.svg';
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


function App() {
  return (
    <Router>
     <div>
       <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        </Routes>
     </div>
     </Router>
  );
}

export default App;
