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
          <div className="relative border-2 h-[40rem] border-gray-950">
            <img
              src={invite}
              className="absolute top-0 left-[calc(40%)] w-[15vw] h-[10vw]"
              alt=""
            ></img>
            <img
              src={algiz}
              className="absolute top-[15vw] left-[calc(30%)] w-[17vw] h-[10vw]"
              alt=""
            ></img>
            <img
              src={and}
              className="absolute top-[17vw] left-[calc(40%)] opacity-20 w-[15vw] h-[15vw]"
              alt=""
            ></img>
            <img
              src={angela}
              className="absolute top-[25vw] left-[calc(50%)] w-[19vw] h-[9vw]"
              alt=""
            ></img>
            <img
              src={egg}
              className="absolute top-[40vw] left-[calc(40%)] w-[15vw] h-[15vw]"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
