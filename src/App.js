import './App.css';
import Navigation from './components/Navigation';
import Awalan from './components/Awalan';
import Trending from './components/Trending';
import Best from './components/Best';
import Chara from './components/Chara';
import Footer from './components/Footer';
import "./style/anime.css"

function App() {
  return (
 <div>
  <div>
  <Navigation />
  <Awalan />
  </div>
 <div className='trending'>
 <div className="overlay"></div>
  <Trending />
 </div>
 <div className='best'>
  <Best />
 </div>
 <div className='chara'>
  <Chara />
  <Footer />
 </div>
 </div>
  );
}

export default App;

