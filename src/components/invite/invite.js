import algiz from "../../assets/algiz.png";
import and from "../../assets/and.png";
import angela from "../../assets/angela.png";
import "./invite.css";
import Timer from "./timer/timer";

export default function Invite({ domReady }) {
  return (
    <div className="mx-auto overflow-hidden relative">
      <div
        className={`invite-init absolute z-10 top-0 left-0 bg-white w-full h-full trasition duration-[2000ms] ${
          domReady ? "opacity-0" : "opacity-100"
        }`}
      ></div>
      <div className="invite__row grid h-full min-h-screen section_width mx-auto lg:relative">
        <div className="invite__column">
          <div className="invite__item">
            <div className="invite__item__row flex justify-center">
              <div className="invite__item__image flex-grow-0 flex-shrink basis-auto lg:basis-[61%]">
                <div className="names__row flex flex-col relative mx-[5%] my-[15%] lg:my-[2%]">
                  <div className="names__column flex">
                    <div className="names__item flex-grow-0 flex-shrink-0 basis-[60%] mr-[40%] relative z-0">
                      <img src={algiz} alt="" className="algiz" />
                    </div>
                  </div>
                  <div className="names__column flex">
                    <div className="names__item flex-grow-0 flex-shrink-0 basis-[60%] ml-[40%] relative z-0">
                      <img src={angela} alt="" className="angela" />
                    </div>
                  </div>
                  <div className="names__column flex absolute z-0 top-[15%] left-[35%] md:top-[-5%] md:left-[26%] lg:top-[-10%] lg:left-[25%] xl:top-[5%] xl:left-[30%] 2xl:top-[10%] 2xl:left-[30%]">
                    <div className="names__item flex-grow-0 flex-shrink-0 basis-[75%] lg:basis-full">
                      <img
                        src={and}
                        className={`w-[70%] opacity-20 contrast-[10%] trasition duration-[3000ms] ${
                          !domReady ? "scale-0" : "-scale-full"
                        }`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="invite__column">
          <Timer />
        </div>
      </div>
    </div>
  );
}
