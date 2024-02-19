import locationImage from "../../assets/location.png";
import { Map, Placemark, TypeSelector, YMaps } from "@pbe/react-yandex-maps";

export default function WeddingLocation() {
  return (
    <div className="mx-auto w-[450px] max-w-[80%] mb-10 flex flex-col items-center text-green-900 italic relative z-10">
      <img src={locationImage} alt="" className="mb-[20px]" />
      <h1 className="text-2xl  font-semibold">Кафе «Диана»</h1>
      <p className="mb-2 text-sm">
        улица Бичуринский Тракт, 28Е, село Барда, Пермский край
      </p>
      <YMaps>
        <Map
          defaultState={{
            center: [56.905175, 55.562597],
            zoom: 17,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          width="90vw"
          height="45vh"
          instanceRef={(ref) => {
            ref && ref.behaviors.disable("scrollZoom");
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark defaultGeometry={[56.905175, 55.562597]} />
          <TypeSelector options={{ float: "right" }} />
        </Map>
      </YMaps>
    </div>
  );
}
