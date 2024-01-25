import greenBranch from "../assets/green_branch.png";
import hearts from "../assets/hearts_left.png";
export default function ContentBackground() {
  return (
    <div className="c-bg">
      <div className="container h-screen">
        <div className="c-bg__row flex items-center justify-between">
          <div className="c-bg__images relative border-2 border-slate-950 flex-grow-0 flex-shrink-0 basis-1/3">
            <img
              src={greenBranch}
              alt=""
              className="absolute top-1/2 -left-1/2 origin-top -rotate-90 border-2 border-slate-950"
            />
          </div>
          <div className="c-cb__content w-1/3">
            <div className="h-[500px] border-2 border-slate-950 lex-grow-0 flex-shrink-0 basis-1/3">
              <h1>Hello</h1>
            </div>
          </div>
          <div className="c-bg__images rotate-180 border-2 border-slate-950 flex-grow-0 flex-shrink-0 basis-1/3">
            <img src={hearts} alt="" className="border-2 border-slate-950" />
          </div>
        </div>
      </div>
    </div>
  );
}
