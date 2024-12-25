import React from "react";
import { Link } from "react-router";
import { formatDate } from "@/utils/format-date.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { TItem } from "@/types";

interface IProps {
  transaction: TItem;
}

const TransactionItem: React.FC<IProps> = ({
  transaction: {
    status,
    date,
    id,
    image,
    type,
    actor,
    amount,
    description,
    name,
  },
}) => {
  const isTopUp = type === "credit";
  const money = `${isTopUp ? "+" : ""}$${amount}`;
  const pendingSign = status === "pending" ? "Pending -" : "";
  const bankInfo = `${pendingSign} ${description}`;
  const actorInfo = actor ? `${actor} - ` : "";
  const userInfo = `${actorInfo}${formatDate(date)}`;

  return (
    <Link to={`/transaction/${id}`} className={"flex gap-4 p-2 items-center"}>
      <img src={image} alt={name} className={"w-12 h-12 rounded-lg"} />
      <div className={"grow"}>
        <div className={"flex justify-between items-center"}>
          <h3 className={"font-bold"}>{name}</h3>
          <p className={""}>{money}</p>
        </div>
        <p className={"text-slate-400 text-sm"}>{bankInfo}</p>
        <p className={"text-slate-400 text-sm"}>{userInfo}</p>
      </div>
      <div className={"self-start"}>
        <FontAwesomeIcon icon={faChevronRight} className={"text-slate-300"} />
      </div>
    </Link>
  );
};

export default TransactionItem;
