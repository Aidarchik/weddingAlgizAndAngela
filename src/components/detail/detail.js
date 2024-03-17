import detailImage from "../../assets/deatail.png";

export default function Details() {
  return (
    <div className="dg mx-auto max-w-full">
      <div className="dg__row flex flex-col items-center">
        <div className="dg__column mb-10">
          <div className="dg__item">
            <img src={detailImage} alt="" className="max-w-[50%] mx-auto" />
          </div>
        </div>
        <div className="dg__column sm:w-[350px] lg:w-[450px] mb-5 lg:mb-10">
          <div className="dg__item text-green-900  lg:text-xl italic font-Cruinn">
            <p>
              <strong>Гарантируем:</strong> баянист с тамадой, поедание каравая,
              запуск голубей, осыпание пшеном и монетками НЕ БУДЕТ!
            </p>
            <p>
              Приносите с собой веселье и радость в душе, а подарки - в
              конверте!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
