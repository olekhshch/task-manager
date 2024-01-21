/**
 * Generates new dates before/after the given date
 * @param startDate Date before/after which should be generated new dates
 * @param numOfDates Number of dates to generate
 * @param future true to generate dates after the given, false - before the given
 */
const generateNewDates = async (
  startDate: Date,
  numOfDates: number = 5,
  future: boolean = true
) => {
  const result: Date[] = [];

  for (let i = 1; i <= numOfDates; i++) {
    const refDate = new Date(startDate);
    const sign = future ? 1 : -1;

    refDate.setDate(startDate.getDate() + sign * i);
    result.push(refDate);
  }

  return result;
};

export default generateNewDates;
