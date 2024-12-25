import { TItem } from "@/types";

export const fetchTransaction = async (id?: string): Promise<TItem> => {
  if (!id) {
    throw new Error("Transaction ID is required");
  }
  const response = await fetch("/db/index.json");
  const transactions = await response.json();
  const targetTransaction = transactions.find((transaction: TItem) => transaction.id === id);
  return targetTransaction;
};