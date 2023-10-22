import format from "date-fns/format";

export const formatDate = (originalDate: string): string => {
  const date = new Date(originalDate);
  return format(date, "d MMMM yyyy");
};
