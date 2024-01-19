import homeWat from './assets/316-3164413_home-wat.png';
import './App.css';
import Tmp from './components/tmp'

function App() {
  return (
    <div className="App">
      <div className='h-screen mx-auto bg-hero-pattern bg-fixed bg-cover bg-center'>
        <div className='container mx-auto px-2'>
        <img src={homeWat} className='relative opacity-25 top-[calc(-6vw)]' alt=""></img>
          <Tmp className=''/>
        </div>
      </div>
    </div>
  );
}

export default App;
