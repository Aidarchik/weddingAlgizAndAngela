import weddingDate from "../../assets/wedding_date.png";
import heartImage from "../../assets/heart.png";
import Calendar from "./calendar/calendar";
import Timer from "./timer/timer";

export default function WeddingDate() {
  return (
    <div className="wrapper w-[350px] max-w-full mx-auto text-green-900 italic flex flex-col items-center">
      <img src={weddingDate} alt="" className="" />
      <Calendar heartImage={heartImage} />
      <Timer />
    </div>
  );
}
