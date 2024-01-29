import { useInView } from "react-intersection-observer";
import egg from "../assets/pngegg.png";

export default function Connector() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div ref={ref} className="w-full mb-[40px]">
      <img
        src={egg}
        alt=""
        className={`mx-auto w-[230px] max-w-[80%] transition duration-[4000ms] ${
          !inView ? "scale-50" : "scale-75"
        } `}
      />
    </div>
  );
}
