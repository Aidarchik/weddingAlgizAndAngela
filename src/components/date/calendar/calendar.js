import { useEffect, useState } from "react";
import "./Calendar.css";
import heartImage from "../../../assets/heart.png";
export default function Calendar() {
  const [toggleScale, setToggleScale] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setToggleScale((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="calendar_wrapper text_color">
      <header className="calendar__header">
        <div className="section_title">Август 2024</div>
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li>Пн</li>
          <li>Вт</li>
          <li>Ср</li>
          <li>Чт</li>
          <li>Пт</li>
          <li className="weekend">Сб</li>
          <li className="weekend">Вс</li>
        </ul>
        <ul className="days number">
          <li className="inactive">29</li>
          <li className="inactive">30</li>
          <li className="inactive">31</li>
          <li className="">1</li>
          <li className="">2</li>
          <li className="active relative weekend">
            <img
              src={heartImage}
              alt=""
              className={`absolute hue-rotate-30 heart top-[-20%] transition duration-1000 ${
                toggleScale ? "scale-150" : "scale-100"
              }`}
            />
            3
          </li>
          <li className="weekend">4</li>
          <li className="">5</li>
          <li className="">6</li>
          <li className="">7</li>
          <li className="">8</li>
          <li className="">9</li>
          <li className="weekend">10</li>
          <li className="weekend">11</li>
          <li className="">12</li>
          <li className="">13</li>
          <li className="">14</li>
          <li className="">15</li>
          <li className="">16</li>
          <li className="weekend">17</li>
          <li className="weekend">18</li>
          <li className="">19</li>
          <li className="">20</li>
          <li className="">21</li>
          <li className="">22</li>
          <li className="">23</li>
          <li className="weekend">24</li>
          <li className="weekend">25</li>
          <li className="">26</li>
          <li className="">27</li>
          <li className="">28</li>
          <li className="">29</li>
          <li className="">30</li>
          <li className="weekend">31</li>
          <li className="inactive weekend">1</li>
        </ul>
      </div>
    </div>
  );
}
