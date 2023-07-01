import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './Header';
import LandingPage from './Home/LandingPage';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Policy_Details from './PolicyDetails/Policy_Details';
import Policy_Details_2 from './PolicyDetails/Policy_Details_2';
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path = "/" element = {<LandingPage/>}/>
        <Route path = "/policy-details" element = {<Policy_Details/>}/>
        <Route path = "/checkout" element = {<Policy_Details_2/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>

  );
}

export default App;
