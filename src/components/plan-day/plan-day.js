import gathering from "../../assets/gathering_of_guests.png";
import furshet from "../../assets/furshet.png";
import ceremony from "../../assets/ceremony.png";
import banket from "../../assets/banket.png";
import "./plan-day.css";
import PlanDayItems from "./components/plan-day-items";

export default function PlanDay() {
  return (
    <div className="plan-day section_width mb-20 flex flex-col items-center mx-auto">
      <div className="plan-day__title">
        <div className="section_title">План мероприятий</div>
      </div>
      <div className="plan-day__body">
        <PlanDayItems
          image={gathering}
          time="16:00"
          title="Сбор гостей"
          desc="встречаемся, знакомимся, обнимаемся."
        />
        <PlanDayItems
          image={furshet}
          time="16:10"
          title="Фуршет"
          desc="настраиваемся на веселую свадьбу."
        />
        <PlanDayItems
          image={ceremony}
          time="16:30"
          title="Выездная церемония"
          desc="немного радостных трогательных формальностей - то, ради чего
          собрались."
        />
        <PlanDayItems
          image={banket}
          time="17:00"
          title="Начало банкета"
          desc="от души посмеёмся и сделаем этот вечер незабываемым вместе."
        />
      </div>
    </div>
  );
}
