import { DateObject } from "../types";

const createDateObj: (d: Date) => DateObject = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return {
    day: day < 10 ? "0" + day.toString() : day.toString(),
    month: month < 10 ? "0" + month.toString() : month.toString(),
    year: year.toString(),
  };
};

export default createDateObj;
