
import './App.css';
import Allroutes from './components/Allroutes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WomensProducts from './pages/WomensProducts';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <WomensProducts/>
     <Allroutes/>
     <Footer/>

    </div>
  );
}

export default App;
