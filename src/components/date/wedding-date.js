import "./Calendar.css";
import weddingDate from "../../assets/wedding_date.png";
import heartImage from "../../assets/heart.png";
import { useEffect, useState } from "react";

export default function WeddingDate() {
  const [toggleScale, setToggleScale] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setToggleScale((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div class="wrapper">
      <img src={weddingDate} alt="" className="w-[450px] max-w-[75%] mx-auto" />
      <header>
        <p class="current-date">Август 2024</p>
      </header>
      <div class="calendar">
        <ul class="weeks">
          <li>ПН</li>
          <li>ВТ</li>
          <li>СР</li>
          <li>ЧТ</li>
          <li>ПТ</li>
          <li className="weekend">СБ</li>
          <li className="weekend">ВС</li>
        </ul>
        <ul class="days">
          <li class="inactive">29</li>
          <li class="inactive">30</li>
          <li class="inactive">31</li>
          <li class="">1</li>
          <li class="">2</li>
          <li class="active relative weekend">
            <img
              src={heartImage}
              alt=""
              className={`absolute invert bottom-[-50%] transition duration-1000 ${
                toggleScale ? "scale-100" : "scale-75"
              }`}
            />
            3
          </li>
          <li class="weekend">4</li>
          <li class="">5</li>
          <li class="">6</li>
          <li class="">7</li>
          <li class="">8</li>
          <li class="">9</li>
          <li class="weekend">10</li>
          <li class="weekend">11</li>
          <li class="">12</li>
          <li class="">13</li>
          <li class="">14</li>
          <li class="">15</li>
          <li class="">16</li>
          <li class="weekend">17</li>
          <li class="weekend">18</li>
          <li class="">19</li>
          <li class="">20</li>
          <li class="">21</li>
          <li class="">22</li>
          <li class="">23</li>
          <li class="weekend">24</li>
          <li class="weekend">25</li>
          <li class="">26</li>
          <li class="">27</li>
          <li class="">28</li>
          <li class="">29</li>
          <li class="">30</li>
          <li class="weekend">31</li>
          <li class="inactive weekend">1</li>
        </ul>
      </div>
    </div>
  );
}
