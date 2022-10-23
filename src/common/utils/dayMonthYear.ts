export const dayMonthYear = (dateStr: string): string => {
  const date = new Date(Date.parse(dateStr));

  return `${date.getDate()}.${date.getDay()}.${date.getFullYear()}`;
};
