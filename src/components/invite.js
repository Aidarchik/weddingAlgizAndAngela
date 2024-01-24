export default function Invite(props) {
  const { greenBranch, invite, algiz, and, angela, egg } = props.image;
  return (
    <div className="h-full min-h-screen border-0 container mx-auto border-red-800 overflow-hidden mb-5">
      <div className="invite__row flex flex-col content-center justify-start lg:relative">
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
              <div className="invite__item__image flex-grow-0 flex-shrink-0 basis-[43%] md:basis-[30%] lg:basis-[17%] xl:basis-[20%] 2xl:basis-[25%]">
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
              <div className="invite__item__image flex-grow-0 flex-shrink basis-auto lg:basis-[61%] border-0 border-blue-700">
                <div className="names__row flex flex-col border-0 border-blue-700 relative mx-[5%] my-[15%] lg:my-[2%]">
                  <div className="names__column flex">
                    <div className="names__item flex-grow-0 flex-shrink-0 basis-[60%] lg:basis-[60%] mr-[40%]">
                      <img src={algiz} alt="" />
                    </div>
                  </div>
                  <div className="names__column flex">
                    <div className="names__item flex-grow-0 flex-shrink-0 basis-[60%] lg:basis-[60%] ml-[40%]">
                      <img src={angela} alt="" />
                    </div>
                  </div>
                  <div className="names__column flex absolute -z-10 top-[-5%] left-[30%] md:top-[-5%] md:left-[26%] lg:top-[-10%] lg:left-[25%] xl:top-[5%] xl:left-[30%] 2xl:top-[10%] 2xl:left-[30%]">
                    <div className="names__item flex-grow-0 flex-shrink-0 basis-[75%] lg:basis-full">
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
              <div className="invite__item__image flex-grow-0 flex-shrink-0 basis-[43%] md:basis-[30%] lg:absolute lg:w-[20%] lg:left-[10%] lg:top-[68%] lg:-z-10 lg:opacity-60">
                <img src={egg} alt="" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
