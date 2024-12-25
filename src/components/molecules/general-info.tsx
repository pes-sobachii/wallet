import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { generateBalanceValue } from "@/utils/generate-balance-value.ts";
import { limitDecimals } from "@/utils/limit-decimals.ts";
import { MAX_BALANCE_VALUE, MAX_DECIMALS } from "@/constants";
import { calculatePointsForDate } from "@/utils/calculate-points.ts";

const GeneralInfo = () => {
  const balance = generateBalanceValue();
  const available = limitDecimals(MAX_BALANCE_VALUE - balance, MAX_DECIMALS);
  const monthName = new Date("2020-12-28").toLocaleString("en-us", {
    month: "long"
  });
  const points = calculatePointsForDate(new Date().toISOString());
  return (
    <div
      className={
        "grid grid-cols-2 mb-8 gap-2 [&>div]:rounded-lg [&>div]:bg-white"
      }
    >
      <div className={"text-sm flex flex-col px-3 py-2"}>
        Card Balance
        <b className={"text-3xl"}>${balance}</b>
        <span className={"text-slate-400"}>${available} Available</span>
      </div>
      <div className={"row-span-2 flex-col flex px-3 py-2 justify-between items-end"}>
        <div className={"w-full text-sm"}>
          <p>No Payment Due</p>
          <p className={"text-slate-400"}>
            You&apos;ve paid your {monthName} balance.
          </p>
        </div>
        <div
          className={
            "rounded-full bg-slate-200 flex items-center justify-center w-16 h-16"
          }
        >
          <FontAwesomeIcon
            icon={faCheck}
            className={"text-black w-8 h-8"}
          />
        </div>
      </div>
      <div className={"text-sm py-5 px-3"}>
        <p>
          Daily Points
        </p>
        <p className={"text-slate-400"}>
          {points}
        </p>
      </div>
    </div>
  );
};

export default GeneralInfo;