export default function Invite(props) {
  const { greenBranch, invite, algiz, and, angela, egg } = props.image;
  return (
    <div className="h-screen border-0 border-red-800 flex justify-center">
      <img
        src={greenBranch}
        className={`absolute top-[-5.3vw] w-[98vw] sm:top-[-5.1vw] sm:w-[96vw] md:top-[-3.9vw] md:w-[72vw] lg:top-[-3.2vw] lg:w-[60vw] xl:top-[-2.7vw] xl:w-[50vw] h-fit`}
        alt=""
      ></img>
      <img
        src={invite}
        className={`absolute top-[30vw] w-[42vw] sm:top-[25vw] sm:w-[40vw] md:top-[21vw] md:w-[35vw] lg:top-[17vw] lg:w-[25vw] xl:top-[14vw] xl:w-[22vw] h-fit contrast-[10%]`}
        alt=""
      ></img>
      <img
        src={and}
        className={`absolute top-[68vw] w-[48vw] sm:top-[66vw] sm:w-[39vw] md:top-[40vw] md:w-[1vw] lg:top-[1vw] lg:w-[1vw] xl:top-[1vw] xl:w-[1vw] opacity-20 contrast-[10%]`}
        alt=""
      ></img>
      <div
        className={`absolute top-[68vw] w-[96vw] sm:top-[63vw] sm:w-[90vw] md:top-[1vw] md:w-[1vw] lg:top-[1vw] lg:w-[1vw] xl:top-[1vw] xl:w-[1vw] grid`}
      >
        <img
          src={algiz}
          className="w-full col-start-1 col-span-10"
          alt=""
        ></img>
        <img
          src={angela}
          className="w-full col-start-8 col-span-12"
          alt=""
        ></img>
      </div>
      <img
        src={egg}
        className={`absolute top-[138vw] w-[53vw] sm:top-[128vw] sm:w-[43vw] md:top-[1vw] md:w-[1vw] lg:top-[1vw] lg:w-[1vw] xl:top-[1vw] xl:w-[1vw]`}
        alt=""
      ></img>
    </div>
  );
}
