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
      <div className="mx-auto bg-hero-pattern bg-fixed bg-cover bg-center h-screen">
        <img
          src={greenBranch}
          className="absolute top-[-24px] w-[439px] left-[calc(50%-160px-59px)]"
          alt=""
        ></img>
        <img
          src={invite}
          className="absolute top-28 sm:left-[calc(50%-160px+84px)] left-[calc(50%-600px+531px)] w-50 h-20 contrast-[10%]"
          alt=""
        ></img>
        <img
          src={algiz}
          className="absolute top-[274px] left-[calc(50%-160px-16px)] w-44"
          alt=""
        ></img>
        <img
          src={and}
          className="absolute top-[258px] left-[calc(50%-160px+72px)] opacity-20 w-44 contrast-[10%]"
          alt=""
        ></img>
        <img
          src={angela}
          className="absolute top-[360px] left-[calc(50%-160px+110px)] w-44"
          alt=""
        ></img>
        <img
          src={egg}
          className="absolute top-[526px] left-[calc(50%-160px+57px)] w-52"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default App;
