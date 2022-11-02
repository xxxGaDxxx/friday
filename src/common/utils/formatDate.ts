const TEN = 10;

export const formatDate = (dateStr: string): string => {
  const get2digitsString = (num: number): number | string => (num < TEN ? `0${num}` : num);

  const date = new Date(Date.parse(dateStr));

  return `${get2digitsString(date.getDate())}.${get2digitsString(
    date.getMonth() + 1,
  )}.${get2digitsString(date.getFullYear())}`;
};
