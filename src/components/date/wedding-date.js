import { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import weddingDate from "../../assets/wedding_date.png";
import heartImage from "../../assets/heart.png";

export default function WeddingDate() {
  const [value, onChange] = useState(new Date("August 03, 2024 03:24:00"));

  return (
    <div className="container mx-auto w-full italic text-2xl font-Cruinn text-green-900 relative">
      <img src={weddingDate} alt="" className="mx-auto w-[350px] max-w-full" />
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
