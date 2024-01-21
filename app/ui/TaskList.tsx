import React, { useState } from "react";
import DayCard from "./DayCard";
import createDateObj from "../functions/createDateObj";
import generateNewDates from "../functions/addNewDates";

const TaskList = async () => {
  const currentDate = new Date();
  const [futureDates, pastDates] = await Promise.all([
    generateNewDates(currentDate),
    generateNewDates(currentDate, 7, false),
  ]);
  const allDates = [...pastDates, currentDate, ...futureDates];
  const allDatesObjects = allDates.map((date) => createDateObj(date));

  return (
    <div className="bg-gray-300 p-1 flex gap-1 rounded-r-xl overflow-auto">
      {allDatesObjects.map((date) => {
        const key = `${date.day}.${date.month}.${date.year}`;
        return <DayCard key={key} dateObj={date} />;
      })}
    </div>
  );
};

export default TaskList;
