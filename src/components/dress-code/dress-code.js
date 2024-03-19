import dressCodeColors from "../../assets/dress_code_colors.png";

export default function DressCode() {
  return (
    <div className="dg mx-auto section_width">
      <div className="dg__row flex flex-col items-center">
        <div className="dg__column">
          <div className="dg__item">
            <div className="section_title">Дресс-код</div>
          </div>
        </div>
        <div className="dg__column mb-5">
          <div className="dg__item">
            <p>
              Мы будем рады, если своими нарядами вы поддержите цветовую гамму
              дня
            </p>
          </div>
        </div>
        <div className="dg__column">
          <div className="dg__item">
            <img
              src={dressCodeColors}
              alt=""
              className="mx-auto  bg-white rounded-full bg-opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
