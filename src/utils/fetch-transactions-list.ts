import { TItem } from "@/types";

export const fetchTransactionsList = async (): Promise<TItem[]> => {
  const response = await fetch("/db/index.json");
  return await response.json();
};