import greenBranch from "../../assets/green_branch.png";
import invite from "../../assets/invite.png";
import algiz from "../../assets/algiz.png";
import algizBlack from "../../assets/algiz_black.png";
import and from "../../assets/and.png";
import angela from "../../assets/angela.png";
import angelaBlack from "../../assets/angela_black.png";
import egg from "../../assets/pngegg.png";
import "./invite.css";

export default function Invite({ domReady }) {
  return (
    <div className="h-full min-h-screen border-0 container mx-auto border-red-800 pb-5 overflow-hidden">
      <div
        className={`absolute z-40 top-0 left-0 bg-white w-full h-full min-h-screen trasition duration-[1000ms] ${
          domReady ? "opacity-0" : "opacity-100"
        }`}
      ></div>
      <div className="invite__row flex flex-col content-center justify-start lg:relative">
        <div className="invite__column flex-grow-0 flex-shrink basis-auto">
          <div className="invite__item border-0 border-blue-700">
            <div className="invite__item__row flex justify-center">
              <div className="invite__item__image flex-grow-0 flex-shrink-0 basis-[100%] lg:basis-[60%]">
                <img
                  src={greenBranch}
                  alt=""
                  className={`relative mx-auto trasition duration-[2000ms] ${
                    domReady ? "translate-y-0" : "-translate-y-full"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="invite__column flex-grow-0 flex-shrink basis-auto">
          <div className="invite__item border-0 border-blue-700">
            <div className="invite__item__row flex justify-center">
              <div className="invite__item__image flex-grow-0 flex-shrink-0 basis-[43%] md:basis-[30%] lg:basis-[17%] xl:basis-[20%] 2xl:basis-[25%]">
                <img
                  src={invite}
                  alt=""
                  className={`h-fit contrast-[10%] mx-auto trasition duration-[4000ms] ${
                    !domReady ? "scale-0" : "-scale-full"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="invite__column flex-grow-0 flex-shrink basis-auto">
          <div className="invite__item">
            <div className="invite__item__row flex justify-center">
              <div className="invite__item__image flex-grow-0 flex-shrink basis-auto lg:basis-[61%] border-0 border-blue-700">
                <div className="names__row flex flex-col border-0 border-blue-700 relative mx-[5%] my-[15%] lg:my-[2%]">
                  <div className="names__column flex">
                    <div className="names__item flex-grow-0 flex-shrink-0 basis-[60%] lg:basis-[60%] mr-[40%] relative">
                      <img src={algiz} alt="" className="algiz" />
                      <img
                        src={algizBlack}
                        alt=""
                        className={`algiz-black trasition duration-[2000ms] ${
                          domReady ? "opacity-0" : "opacity-100"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="names__column flex">
                    <div className="names__item flex-grow-0 flex-shrink-0 basis-[60%] lg:basis-[60%] ml-[40%] relative">
                      <img src={angela} alt="" className="angela" />
                      <img
                        src={angelaBlack}
                        alt=""
                        className={`angela-black trasition duration-[2000ms] ${
                          domReady ? "opacity-0" : "opacity-100"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="names__column flex absolute z-0 top-[-5%] left-[30%] md:top-[-5%] md:left-[26%] lg:top-[-10%] lg:left-[25%] xl:top-[5%] xl:left-[30%] 2xl:top-[10%] 2xl:left-[30%]">
                    <div className="names__item flex-grow-0 flex-shrink-0 basis-[75%] lg:basis-full">
                      <img
                        src={and}
                        className={`opacity-20 contrast-[10%] trasition duration-[3000ms] ${
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
        <div className="invite__column flex-grow-0 flex-shrink basis-auto lg:min-h-10">
          <div className="invite__item border-0 border-blue-700">
            <div className="invite__item__row flex justify-center">
              <div className="invite__item__image flex-grow-0 flex-shrink-0 basis-[43%] md:basis-[30%] lg:absolute lg:w-[20%] lg:left-[10%] lg:top-[60%] lg:-z-10 lg:opacity-60">
                <img
                  src={egg}
                  alt=""
                  className={`mx-auto trasition duration-[2000ms] ${
                    !domReady ? "scale-0" : "-scale-full"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}