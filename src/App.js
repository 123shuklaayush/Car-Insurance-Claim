import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './Header';
import ImageSlider from './Home/ImageSlider';
function App() {
  return (
    <div className="App">
      <Header/>
      <ImageSlider/>
    </div>
  );
}

export default App;
