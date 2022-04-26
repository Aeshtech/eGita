import { Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Chapter from './Components/Chapter';
import Shlock from './Components/Shlock';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />      
      <Routes>
        <Route path="/" element={<Chapter/>}></Route>
        <Route path="shlock" element={<Shlock/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
