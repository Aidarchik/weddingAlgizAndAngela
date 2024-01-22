export default function Invite(props) {
  const { greenBranch, invite, algiz, and, angela, egg } = props.image;
  return (
    <div className="h-screen border-0 border-red-800 flex justify-center">
      <img
        src={greenBranch}
        className="absolute top-[-2.9vw] w-[55vw] h-fit"
        alt=""
      ></img>
      <img
        src={invite}
        className="absolute top-[14vw] w-[14vw] h-fit contrast-[10%]"
        alt=""
      ></img>
      <img
        src={and}
        className="absolute top-[20vw] w-[20vw] opacity-20 contrast-[10%]"
        alt=""
      ></img>
      <div className="absolute top-[20vw] w-[45vw] grid">
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
      <img src={egg} className="absolute top-[50vw] w-[15vw]" alt=""></img>
    </div>
  );
}
