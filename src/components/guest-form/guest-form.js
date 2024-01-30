import guestFormImage from "../../assets/Guest_form.png";

export default function GuestForm() {
  return (
    <div className="dg mx-auto max-w-full">
      <div className="dg__row flex flex-col items-center">
        <div className="dg__column sm:mb-10">
          <div className="dg__item">
            <img src={guestFormImage} alt="" className="max-w-[75%] mx-auto" />
          </div>
        </div>
        <div className="dg__column sm:w-[350px] lg:w-[450px] mb-5 lg:mb-10">
          <div className="dg__item text-green-900  lg:text-xl italic font-Cruinn">
            <p>
              Мы будем рады, если своими нарядами вы поддержите цветовую гамму
              дня
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
