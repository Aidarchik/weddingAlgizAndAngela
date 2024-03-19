import { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const weddingDate = new Date(1722625200000); //"2024 Aug 3 00:00:00"
      const now = new Date();
      const gap = weddingDate - now;
      const days = Math.floor(gap / 1000 / 60 / 60 / 24);
      const hours = Math.floor(gap / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(gap / 1000 / 60) % 60;
      const seconds = Math.floor(gap / 1000) % 60;
      setCount({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="font-lastochka">
      <h1 className="text-4xl">До свадьбы осталось</h1>
      <div className="timer">
        <div className="timer__row flex item-center justify-center">
          <div className="timer__column p-1">
            <div className="timer__item">
              <div className="item__number italic font-Cruinn text-xl">
                {count.days}
              </div>
              <h3 className="item__name text-3xl">дней</h3>
            </div>
          </div>
          <div className="timer__column p-1">
            <div className="timer__item">
              <div className="item__number italic font-Cruinn text-xl">:</div>
            </div>
          </div>
          <div className="timer__column p-1">
            <div className="timer__item">
              <div className="item__number italic font-Cruinn text-xl">
                {count.hours}
              </div>
              <h3 className="item__name text-3xl">часов</h3>
            </div>
          </div>
          <div className="timer__column p-1">
            <div className="timer__item">
              <div className="item__number italic font-Cruinn text-xl">:</div>
            </div>
          </div>
          <div className="timer__column p-1">
            <div className="timer__item">
              <div className="item__number italic font-Cruinn text-xl">
                {count.minutes}
              </div>
              <h3 className="item__name text-3xl">минут</h3>
            </div>
          </div>
          <div className="timer__column p-1">
            <div className="timer__item">
              <div className="item__number italic font-Cruinn text-xl">:</div>
            </div>
          </div>
          <div className="timer__column p-1">
            <div className="timer__item">
              <div className="item__number italic font-Cruinn text-xl">
                {count.seconds}
              </div>
              <h3 className="item__name text-3xl">секунд</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
