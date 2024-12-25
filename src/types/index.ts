export type TItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  date: string;
  amount: number
  type: "credit" | "payment"
  status: "pending" | "approved"
  actor?: string
}