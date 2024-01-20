import greenBranch from "./assets/green_branch.png";
import invite from "./assets/invite.png";
import algiz from "./assets/algiz.png";
// import algizBlack from './assets/algiz_black.png';
import and from "./assets/and.png";
import angela from "./assets/angela.png";
// import angelaBlack from './assets/angela_black.png';
import egg from "./assets/pngegg.png";
import "./App.css";
// import Tmp from './components/tmp'

function App() {
  return (
    <div className="App">
      <div className="h-full mx-auto bg-hero-pattern bg-fixed bg-cover bg-center">
        <div className="container mx-auto px-2 w-[70vw] h-full">
          <img
            src={greenBranch}
            className="relative top-[calc(-3.7vw)]"
            alt=""
          ></img>
          <div>
            <img src={invite} className="" alt=""></img>
            <img src={algiz} className="" alt=""></img>
            <img src={and} className="w-20" alt=""></img>
            <img src={angela} className="" alt=""></img>
          </div>
          <img src={egg} className="" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
