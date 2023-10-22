import format from "date-fns/format";

export const formatDate = (originalDate: string): string => {
  const date = new Date(originalDate);
  return format(date, "d MMMM yyyy");
};
export const formatYears = (originalDate: string): string => {
  const date = new Date(originalDate);
  return format(date, "yyyy");
};
export const formatMounth = (originalDate: string): string => {
  const date = new Date(originalDate);
  return format(date, "MMMM");
};
export const formatDay = (originalDate: string): string => {
  const date = new Date(originalDate);
  return format(date, "d");
};
