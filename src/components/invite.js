export default function Invite(props) {
  const { greenBranch, invite, algiz, and, angela, egg } = props.image;
  return (
    <div className="h-full min-h-screen border-2 container mx-auto border-red-800 overflow-hidden mb-5">
      <div className="invite__row flex flex-col content-center justify-start">
        <div className="invite__column flex-grow-0 flex-shrink basis-auto">
          <div className="invite__item border-0 border-blue-700">
            <div className="invite__item__row flex justify-center">
              <div className="invite__item__image flex-grow-0 flex-shrink-0 basis-[120%] lg:basis-[60%]">
                <img src={greenBranch} alt="" className="relative mx-auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="invite__column flex-grow-0 flex-shrink basis-auto">
          <div className="invite__item border-0 border-blue-700">
            <div className="invite__item__row flex justify-center">
              <div className="invite__item__image flex-grow-0 flex-shrink-0 basis-[43%] lg:basis-[17%]">
                <img
                  src={invite}
                  alt=""
                  className="h-fit contrast-[10%] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="invite__column flex-grow-0 flex-shrink basis-auto">
          <div className="invite__item">
            <div className="invite__item__row flex justify-center">
              <div className="invite__item__image flex-grow-0 flex-shrink basis-auto border-2 border-blue-700">
                <div className="names__row flex flex-col border-2 border-blue-700 relative mx-[5%] my-[15%]">
                  <div className="names__column flex">
                    <div className="names__item flex-grow-0 flex-shrink-0 basis-[60%] lg:basis-[80%] mr-[40%] lg:mr-[60%]">
                      <img src={algiz} alt="" />
                    </div>
                  </div>
                  <div className="names__column flex">
                    <div className="names__item flex-grow-0 flex-shrink-0 basis-[60%] lg:basis-[80%] ml-[40%] lg:ml-[60%]">
                      <img src={angela} alt="" />
                    </div>
                  </div>
                  <div className="names__column flex absolute top-[-25%] left-[20%] -z-10">
                    <div className="names__item flex-grow-0 flex-shrink-0 basis-[85%] lg:basis-[250%]">
                      <img
                        src={and}
                        className="opacity-20 contrast-[10%]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="invite__column flex-grow-0 flex-shrink basis-auto">
          <div className="invite__item border-0 border-blue-700">
            <div className="invite__item__row flex justify-center">
              <div className="invite__item__image flex-grow-0 flex-shrink-0 basis-[43%]">
                <img src={egg} alt="" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
