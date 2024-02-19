import "./connector.css";

export default function Connector({ image }) {
  return (
    <div className="w-full py-[40px]">
      <img
        src={image}
        alt=""
        className={`connector__image mx-auto w-[400px] max-w-[80%] transition duration-[2000ms]  `}
      />
    </div>
  );
}
