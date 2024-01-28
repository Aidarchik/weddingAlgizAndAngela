import weddingDate from "../../assets/wedding_date.png";
import heartImage from "../../assets/heart.png";
import Calendar from "./calendar/calendar";

export default function WeddingDate() {
  return (
    <div class="wrapper w-[350px] max-w-full mx-auto text-green-900 italic">
      <img src={weddingDate} alt="" className="w-[450px] max-w-[75%] mx-auto" />
      <Calendar heartImage={heartImage} />
    </div>
  );
}
