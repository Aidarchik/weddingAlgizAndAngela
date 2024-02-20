import dressCode from "../../assets/dress_code.png";
import dressCodeColors from "../../assets/dress_code_colors.png";

export default function DressCode() {
  return (
    <div className="dg mx-auto max-w-full">
      <div className="dg__row flex flex-col items-center">
        <div className="dg__column lg:mb-10">
          <div className="dg__item">
            <img src={dressCode} alt="" className="max-w-[50%] mx-auto" />
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
        <div className="dg__column lg:mb-10">
          <div className="dg__item">
            <img
              src={dressCodeColors}
              alt=""
              className="mx-auto bg-white rounded-full bg-opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
