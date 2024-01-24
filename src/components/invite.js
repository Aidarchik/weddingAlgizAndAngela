export default function Invite(props) {
  const { greenBranch, invite, algiz, and, angela, egg } = props.image;
  return (
    <div className="h-full min-h-screen border-2 border-red-800 flex container mx-auto">
      <div className="invite__row flex flex-col content-center justify-start">
        <div className="invite__column flex-grow-0 flex-shrink basis-auto">
          <div className="invite__item border-0 border-blue-700">
            <div className="invite__item__row flex justify-center">
              <div className="invite__item__image flex-grow-0 flex-shrink-0 basis-[120%]">
                <img
                  src={greenBranch}
                  alt=""
                  className="relative top-[-7vw] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="invite__column flex-grow-0 flex-shrink basis-auto">
          <div className="invite__item border-0 border-blue-700 mb-6">
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
          <div className="invite__item border-0 border-blue-700">
            <div className="invite__item__row flex justify-center">
              <div className="invite__item__image flex-grow-0 flex-shrink-0 basis-[50%]">
                <img
                  src={and}
                  alt=""
                  className="opacity-20 contrast-[10%] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
