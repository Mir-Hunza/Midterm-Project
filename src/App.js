import logo from './logo.svg';
import './App.css';
import Introduction from './Components/Introduction/intro';
import Services from "./Components/Service/services"
import Recommend from './Components/Recommend';
import Navbar from './Components/Navigation';
import Footer from './Components/Footer/footr';
import Info from './Components/Info/info';

function App() {
  return (
    <>
    <Navbar/>
    <Introduction/>
    <Services/>
    <Recommend/>
    <Info/>    
    <Footer/>
    
    </>
    
  );
}

export default App;
