import { useQuery } from "@tanstack/react-query";
import { fetchTransactionsList } from "@/utils/fetch-transactions-list.ts";
import TransactionItem from "@/components/molecules/transaction-item.tsx";

const TransactionsList = () => {
  const { data: transactions, isFetching } = useQuery({ queryKey: ["todos"], queryFn: fetchTransactionsList });

  if (isFetching) {
    return <p className={"text-center text-lg font-bold"}>Loading...</p>;
  }

  if (!transactions || transactions.length === 0) {
    return <p className={"text-center text-lg font-bold"}>No transactions found</p>;
  }

  return (
    <div className={"rounded-lg bg-white divide-y-[1px] flex flex-col divide-slate-200"}>
      {transactions.map((transaction, index) => (
        <TransactionItem transaction={transaction} key={index} />
      ))}
    </div>
  );
};

export default TransactionsList;