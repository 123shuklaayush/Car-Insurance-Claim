import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './Header';
import LandingPage from './Home/LandingPage';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path = "/" element = {<LandingPage/>}/>
        <Route path = "/checkout" element = {<h1>hello</h1>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>

  );
}

export default App;
