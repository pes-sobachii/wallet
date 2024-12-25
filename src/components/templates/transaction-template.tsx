import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchTransaction } from "@/utils/fetch-transaction.ts";
import TransactionNotFound from "@/components/molecules/transaction-not-found.tsx";
import GoBackLink from "@/components/atoms/go-back-link.tsx";
import TransactionData from "@/components/organisms/transaction-data.tsx";

const TransactionTemplate = () => {
  const { id } = useParams<{ id: string }>();
  const { data: transaction, isFetching } = useQuery({
    queryKey: ["todos"],
    refetchOnWindowFocus: false,
    queryFn: () => fetchTransaction(id)
  });

  if (isFetching) {
    return <p className={"text-center text-lg font-bold"}>Loading...</p>;
  }

  if (!transaction) {
    return (
      <TransactionNotFound />
    );
  }

  return (
    <main>
      <div className={"container"}>
        <GoBackLink />
        <TransactionData transaction={transaction} />
      </div>
    </main>
  );
};

export default TransactionTemplate;