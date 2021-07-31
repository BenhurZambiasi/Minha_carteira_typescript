import { format } from "date-fns";
export const formatCurrency = (current: number): string => {
  return current.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

export const formatDate = (date: string): string => {
  const dateFormatted = new Date(date);
  return format(dateFormatted, "dd/MM/yyyy");
};
