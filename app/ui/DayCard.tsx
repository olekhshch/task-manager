import React from "react";
import { DateObject } from "../types";
import createDateObj from "../functions/createDateObj";

type props = {
  dateObj: DateObject;
};
const DayCard = ({ dateObj }: props) => {
  const { day, month, year } = dateObj;
  const shortDate = `${day}.${month}`;

  const isToday =
    JSON.stringify(createDateObj(new Date())) === JSON.stringify(dateObj);
  return (
    <article className="text-gray-700 bg-gray-100 border-2 grid-layout min-w-24 rounded-xl">
      <div className="border-b-2">
        <p className="text-2xl text-main font-bold">{shortDate}</p>
        <p className="text-base text-main">{year}</p>
      </div>
      <div className="relative flex flex-col">
        <div className="flex justify-center">checks</div>
        <div className="absolute bottom-0 w-full border-t-2 border-gray-200">
          sum
        </div>
      </div>
    </article>
  );
};

export default DayCard;
