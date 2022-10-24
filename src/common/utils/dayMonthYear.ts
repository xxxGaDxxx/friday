export const dayMonthYear = (dateStr: string): string => {
  const Ten = 10;
  const get2digitsString = (num: number): number | string => (num < Ten ? `0${num}` : num);
  const date = new Date(Date.parse(dateStr));

  return `${get2digitsString(date.getDate())}.${get2digitsString(
    date.getMonth(),
  )}.${get2digitsString(date.getFullYear())}`;
};
