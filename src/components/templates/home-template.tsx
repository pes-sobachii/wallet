import GeneralInfo from "@/components/molecules/general-info.tsx";
import TransactionsList from "@/components/organisms/transactions-list.tsx";

const HomeTemplate = () => {
  return (
    <main>
      <div className={"container"}>
        <GeneralInfo />
        <h2 className={"font-bold text-2xl mb-1"}>Latest Transactions</h2>
        <TransactionsList />
      </div>
    </main>
  );
};

export default HomeTemplate;