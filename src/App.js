import './App.css';
import Home from './Home/Home';
import Download from './Components/Download/Download';
import Footer from './Components/Footer/Footer';
import Search from './Search/Search';

function App() {
  return (
    <div>
      <Home/>
      {/* <Search /> */}
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
