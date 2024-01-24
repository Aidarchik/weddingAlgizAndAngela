export default function Invite(props) {
  const { greenBranch, invite, algiz, and, angela, egg } = props.image;
  return (
    <div className="h-full min-h-screen border-2 container mx-auto border-red-800 overflow-hidden mb-5">
      <div className="invite__row flex flex-col content-center justify-start">
        <div className="invite__column flex-grow-0 flex-shrink basis-auto">
          <div className="invite__item border-0 border-blue-700">
            <div className="invite__item__row flex justify-center">
              <div className="invite__item__image flex-grow-0 flex-shrink-0 basis-[120%]">
                <img src={greenBranch} alt="" className="relative mx-auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="invite__column flex-grow-0 flex-shrink basis-auto">
          <div className="invite__item border-0 border-blue-700">
            <div className="invite__item__row flex justify-center">
              <div className="invite__item__image flex-grow-0 flex-shrink-0 basis-[43%]">
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
              <div className="invite__item__image flex-grow-0 flex-shrink-0 basis-[60%] border-2 border-blue-700 bg-bg-and bg-local bg-center">
                <div className="flex flex-col names__row border-2 border-blue-700">
                  <div className="names__images mr-[50%]">
                    <img src={algiz} alt="" />
                  </div>
                  <div className="names__images ml-[40%]">
                    <img src={angela} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
