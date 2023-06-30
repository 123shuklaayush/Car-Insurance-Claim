import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './Header';
import LandingPage from './Home/LandingPage';
function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
    </div>
  );
}

export default App;
