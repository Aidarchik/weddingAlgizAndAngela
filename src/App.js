import greenBranch from "./assets/green_branch.png";
import invite from "./assets/invite.png";
import algiz from "./assets/algiz.png";
// import algizBlack from './assets/algiz_black.png';
import and from "./assets/and.png";
import angela from "./assets/angela.png";
// import angelaBlack from './assets/angela_black.png';
import egg from "./assets/pngegg.png";
import "./App.css";
import Invite from "./components/invite";
// import Tmp from './components/tmp'

function App() {
  return (
    <div className="App">
      <div className="bg-hero-pattern bg-fixed bg-cover bg-center">
        <Invite image={{ greenBranch, invite, algiz, and, angela, egg }} />
        <Invite image={{ greenBranch, invite, algiz, and, angela, egg }} />
        {/* <div className="h-screen border-2 border-red-800 flex justify-center">
          <div className="relative w-20 sm:w-40 md:w-60 h-20 border-2 border-green-800">
            <div className="absolute top-[-20px] left-[calc(50%-160px+140px)] sm:left-[calc(50%-160px+97px)] w-10 sm:w-32 md:w-52 h-10 border-2 border-blue-800"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
