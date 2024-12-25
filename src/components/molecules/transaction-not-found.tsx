import GoBackLink from "@/components/atoms/go-back-link.tsx";

const TransactionNotFound = () => {
  return (
    <main>
      <div className={"container"}>
        <GoBackLink />
        <h1 className={"text-center"}>
          Transaction not found
        </h1>
      </div>
    </main>
  );
};

export default TransactionNotFound;