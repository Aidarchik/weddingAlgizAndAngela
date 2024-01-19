import homeWat from './assets/316-3164413_home-wat.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='h-screen mx-auto bg-hero-pattern bg-scroll bg-cover bg-center'>
        <div className='container mx-auto flex'>
          <img src={homeWat} className='relative top-[calc(-6vw)] ' alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
