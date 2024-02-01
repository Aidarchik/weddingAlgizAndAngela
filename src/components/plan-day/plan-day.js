import planDayTitle from "../../assets/plan_day.png";
import gathering from "../../assets/gathering_of_guests.png";
import ceremony from "../../assets/ceremony.png";
import banket from "../../assets/banket.png";
import "./plan-day.css";

export default function PlanDay() {
  return (
    <div className="plan-day container text-green-900 font-Cruinn italic">
      <div className="plan-day__title">
        <img src={planDayTitle} alt="" />
      </div>
      <div className="plan-day__row">
        <div className="plan-day__column">
          <div className="plan-day__item">
            <div className="item__content">
              <img src={gathering} alt="" />
              <span className="content__title">16:00 Сбор гостей</span>
              <p>
                встречаемся, знакомимся, обнимаемся, настраиваемся на веселую
                свадьбу.
              </p>
            </div>
          </div>
        </div>
        <div className="plan-day__column">
          <div className="plan-day__item">
            <div className="item__content">
              <img src={ceremony} alt="" />
              <span className="content__title">17:00 Выездная церемония</span>
              <p>
                немного радостных трогательных формальностей - то, ради чего
                собрались.
              </p>
            </div>
          </div>
        </div>
        <div className="plan-day__column">
          <div className="plan-day__item">
            <div className="item__content">
              <img src={banket} alt="" />
              <span className="content__title">17:30 Начало банкета</span>
              <p>от души посмеёмся и сделаем этот вечер незабываемым вместе.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
