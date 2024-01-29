import weddingDate from "../../assets/wedding_date.png";
import Calendar from "./calendar/calendar";
import Timer from "./timer/timer";

export default function WeddingDate() {
  return (
    <div className="wrapper w-[450px] max-w-[80%] mx-auto text-green-900 italic flex flex-col items-center">
      <img src={weddingDate} alt="" className="" />
      <Calendar />
      <Timer />
    </div>
  );
}
