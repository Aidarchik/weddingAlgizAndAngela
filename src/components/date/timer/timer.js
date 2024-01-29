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
      const weddingDate = new Date("2024 Aug 3 09:00:00"); //1722664800000
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
    <div className="">
      <h1 className="text-xl sm:text-2xl">ДО СВАДЬБЫ ОСТАЛОСЬ</h1>
      <div className="timer">
        <div className="timer__row flex item-center justify-center">
          <div className="timer__column p-1 sm:p-2">
            <div className="timer__item">
              <div className="item__number sm:text-2xl">{count.days}</div>
              <h3 className="item__name text-xs sm:text-sm uppercase">дней</h3>
            </div>
          </div>
          <div className="timer__column p-1 sm:p-2">
            <div className="timer__item">
              <div className="item__number sm:text-2xl">:</div>
            </div>
          </div>
          <div className="timer__column p-1 sm:p-2">
            <div className="timer__item">
              <div className="item__number sm:text-2xl">{count.hours}</div>
              <h3 className="item__name text-xs sm:text-sm uppercase">часов</h3>
            </div>
          </div>
          <div className="timer__column p-1 sm:p-2">
            <div className="timer__item">
              <div className="item__number sm:text-2xl">:</div>
            </div>
          </div>
          <div className="timer__column p-1 sm:p-2">
            <div className="timer__item">
              <div className="item__number sm:text-2xl">{count.minutes}</div>
              <h3 className="item__name text-xs sm:text-sm uppercase">минут</h3>
            </div>
          </div>
          <div className="timer__column p-1 sm:p-2">
            <div className="timer__item">
              <div className="item__number sm:text-2xl">:</div>
            </div>
          </div>
          <div className="timer__column p-1 sm:p-2">
            <div className="timer__item">
              <div className="item__number sm:text-2xl">{count.seconds}</div>
              <h3 className="item__name text-xs sm:text-sm uppercase">
                секунд
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
