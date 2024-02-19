import planDayTitle from "../../assets/plan_day.png";
import gathering from "../../assets/gathering_of_guests.png";
import furshet from "../../assets/furshet.png";
import ceremony from "../../assets/ceremony.png";
import banket from "../../assets/banket.png";
import "./plan-day.css";
import PlanDayItems from "./components/plan-day-items";

export default function PlanDay() {
  return (
    <div className="plan-day container text-green-900 font-Cruinn italic  w-[450px] max-w-[80%] mb-10 flex flex-col items-center mx-auto">
      <div className="plan-day__title">
        <img src={planDayTitle} alt="" className="mb-[20px]" />
      </div>
      <div className="plan-day__body">
        <PlanDayItems
          image={gathering}
          title="16:00 Сбор гостей"
          desc="встречаемся, знакомимся, обнимаемся."
        />
        <PlanDayItems
          image={furshet}
          title="16:10 Фуршет"
          desc="настраиваемся на веселую свадьбу."
        />
        <PlanDayItems
          image={ceremony}
          title="16:30 Выездная церемония"
          desc="немного радостных трогательных формальностей - то, ради чего
          собрались."
        />
        <PlanDayItems
          image={banket}
          title="17:00 Начало банкета"
          desc="от души посмеёмся и сделаем этот вечер незабываемым вместе."
        />
      </div>
    </div>
  );
}
