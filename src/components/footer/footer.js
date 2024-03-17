import egg from "../../assets/pngegg.png";
import footerImage from "../../assets/algizandangela_footer.png";
import greenBranchFooter from "../../assets/green_branch_footer.png";

export default function Footer() {
  return (
    <div className="w-full mx-auto flex flex-col place-items-center">
      {/* <div className="w-[30%] lg:w-[20%] mb-10">
        <img src={egg} alt="" />
      </div> */}
      <div className="text-green-800 uppercase text-2xl md:text-4xl lg:text-5xl mb-5 font-light">
        <p>мы будем рады</p>
        <p>видеть вас!</p>
      </div>
      <div className="w-[90%] md:w-[60%] mb-10">
        <img src={footerImage} alt="" />
      </div>
      {/* <div className="w-[80%]">
        <img src={greenBranchFooter} alt="" />
      </div> */}
    </div>
  );
}
