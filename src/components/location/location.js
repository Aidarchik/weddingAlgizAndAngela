import { Map, Placemark, TypeSelector, YMaps } from "@pbe/react-yandex-maps";

export default function WeddingLocation() {
  return (
    <div className="mx-auto w-[450px] max-w-[80%] mb-10 flex flex-col items-center font-lastochka relative z-10">
      <div className="section_title">Место проведения</div>
      <h1 className="text-4xl mb-4">Кафе «Диана»</h1>
      <p className="mb-10">
        улица Бичуринский Тракт, <span className="number">28</span>Е, село
        Барда, Пермский край
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
