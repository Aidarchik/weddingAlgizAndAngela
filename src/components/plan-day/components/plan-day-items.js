import { useInView } from "react-intersection-observer";

export default function PlanDayItems({ image, time, title, desc }) {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="plan-day__item">
      <div className="item__icon">
        <img src={image} alt="" />
      </div>
      <div
        className={`item__content transition duration-[2000ms]`}
        style={{
          transform: inView ? "translateY(-50%)" : "translateY(100%) ",
          opacity: inView ? "100" : "0",
        }}
      >
        <div className="content__title">{title}</div>
        <div className="number">{time} </div>
        <p className="content__desc">{desc}</p>
      </div>
    </div>
  );
}
