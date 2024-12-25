import React from "react";
import { TItem } from "@/types";
import { formatDateAndTime } from "@/utils/format-date-and-time.ts";

interface IProps {
  transaction: TItem;
}

const TransactionData: React.FC<IProps> = ({ transaction }) => {
  return (
    <>
      <div className={"text-center text-sm mb-8 text-slate-400"}>
        <p className={"text-center text-black font-bold text-5xl mb-1"}>
          ${transaction.amount}
        </p>
        <p>{transaction.name}</p>
        <p>{transaction.actor}</p>
        <p>{formatDateAndTime(transaction.date)}</p>
      </div>
      <div className={"rounded-lg bg-white p-2"}>
        <div>
          <p className={"capitalize font-bold"}>
            Status: {transaction.status}
          </p>
          <p className={"text-slate-400"}>{transaction.description}</p>
        </div>
        <hr className={"h-[1px] bg-slate-200 my-2"} />
        <div className={"flex justify-between items-center font-bold"}>
          <p>Total</p>
          <p>${transaction.amount}</p>
        </div>
      </div>
    </>
  );
};

export default TransactionData;