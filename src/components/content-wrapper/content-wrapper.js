import { useInView } from "react-intersection-observer";
import greenBranchLeft from "../../assets/green_branch_left.png";
import greenBranchRight from "../../assets/green_branch_right.png";
import hearts_L from "../../assets/hearts_left.png";
import hearts_R from "../../assets/herats_right.png";
// import hearts_R from "../assets/herats_right.png";
export function ContentWrapperLeft(props) {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return (
    <div ref={ref} className="cw">
      <div className="container mx-auto h-full relative">
        <div className="cw__row flex items-center justify-center">
          <div className="cw__image flex-initial basis-[20%] sm:basis-[13%] xl:basis-[10%] order-1  ">
            <img src={greenBranchLeft} alt="" className="" />
          </div>
          <div
            className={`cw__image flex-none absolute left-0 w-[100%] transition duration-[30000ms] ${
              inView && "translate-x-[130%]"
            }`}
          >
            <img src={hearts_L} alt="" className="top-0" />
          </div>
          <div className="cw__body flex-initial basis-3/4 lg:basis-[50%] xl:basis-[40%] order-2 pr-6 mr-11">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContentWrapperRight(props) {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return (
    <div ref={ref} className="cw">
      <div className="container mx-auto h-full relative">
        <div className="cw__row flex items-center justify-center">
          <div className="cw__image flex-initial basis-[20%] sm:basis-[13%] xl:basis-[10%] order-2  ">
            <img src={greenBranchRight} alt="" className="" />
          </div>
          <div
            className={`cw__image flex-none absolute right-0  w-[100%] transition duration-[30000ms] ${
              inView && "-translate-x-[130%]"
            }`}
          >
            <img src={hearts_R} alt="" className="top-0" />
          </div>
          <div className="cw__body flex-initial basis-3/4 lg:basis-[50%] xl:basis-[40%] order-1 p-6 ml-11">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
