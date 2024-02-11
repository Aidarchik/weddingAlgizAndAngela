import guestFormImage from "../../assets/Guest_form.png";
import "./guest-form.css";

export default function GuestForm() {
  return (
    <div className="guest_form mx-auto max-w-full text-green-900 font-Cruinn italic">
      <img src={guestFormImage} alt="" />
      <label>Просьба дать свой ответ до 14.06.2023</label>
      <form action="#" method="post" className="guest_form__body">
        <div className="guest_form__title">Ваши Имя и Фамилия</div>
        <div className="guest_form__item">
          <input
            type="text"
            name="name"
            id="formName"
            placeholder="Иван Иванов/Мария Ивановна"
            className="guest_form__input"
          />
        </div>
        <div className="guest_form__title">Ваше присутствие:</div>
        <div className="guest_form__item">
          <div className="options">
            <div className="options__item">
              <input
                type="radio"
                id="formYesQuestion"
                name="question"
                value="yes"
                className="options__input"
                checked
              />
              <label htmlFor="formYesQuestion" className="options__label">
                Да, с удовольствием!
              </label>
            </div>
          </div>
          <div className="options">
            <div className="options__item">
              <input
                type="radio"
                id="formNoQuestion"
                name="question"
                value="no"
                className="options__input"
              />
              <label htmlFor="formNoQuestion" className="options__label">
                К сожалению, не смогу
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="guest_form__button">
          Отправить
        </button>
      </form>
    </div>
  );
}
