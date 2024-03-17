import dearGuests from "../../assets/dear_guests.png";

export default function DearGuests() {
  return (
    <div className="dg mx-auto section_width">
      <div className="dg__row flex flex-col items-center">
        <div className="dg__column">
          <div className="dg__item">
            <img src={dearGuests} alt="" className="dg_title" />
          </div>
        </div>
        <div className="dg__column">
          <div className="dg__item text_color lg:text-xl font-Cruinn">
            <p>Спешим поделиться</p>
            <p>
              с Вами радостью
              <span className="text-2xl not-italic text-neutral-600">♡</span>
            </p>
            <p> Мы решили пожениться!</p>
            <p>
              В этот особенный день мы хотим оказаться в окружении самых любимых
              и дорогих для нас людей. С большим удовольствием приглашаем вас на
              нашу свадьбу!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
