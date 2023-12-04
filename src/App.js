import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Landing_page from './Components/Landing_page/Landing_page';
import Why_Gucci from './Components/Why_Gucci/Why_Gucci';
import Tokenomics from './Components/Tokenomics/Tokenomics';
import How_to_buy from './Components/How_to_buy/How_to_buy';
import RoadMap from './Components/RoadMap/RoadMap';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Landing_page/>
    <Why_Gucci/>
    <Tokenomics/>
    <How_to_buy/>
    <RoadMap/>
    <Footer/>
    </div>
  );
}

export default App;
