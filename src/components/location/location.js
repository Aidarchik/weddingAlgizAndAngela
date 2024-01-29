import locationImage from "../../assets/location.png";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

export default function WeddingLocation() {
  return (
    <div className="mx-auto w-[350px] max-w-full flex flex-col items-center">
      <img src={locationImage} alt="" />
      <YMaps>
        <Map defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}>
          <Placemark defaultGeometry={[55.751574, 37.573856]} />
        </Map>
      </YMaps>
      ;
    </div>
  );
}
