import dearGuests from "../../assets/dear_guests.png";

export default function DearGuests() {
  return (
    <div className="dg w-[80%] mx-auto">
      <div className="dg__row">
        <div className="dg__column">
          <div className="dg__item">
            <img src={dearGuests} alt="" />
          </div>
        </div>
        <div className="dg__column">
          <div className="dg__item text-green-900 lg:text-xl italic font-Cruinn">
            <p>Спешим поделиться</p>
            <p>
              с Вами радостью
              <span className="text-2xl not-italic text-green-900">♡</span>
            </p>
            <p> Мы решили пожениться!</p>
            <p>
              В этот особенный день мы хотим оказаться в окружении самых любимых
              и дорогих для нас людей.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
