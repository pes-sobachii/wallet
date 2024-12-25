import { Route, Routes } from "react-router";
import Home from "./components/pages/home.tsx";
import Transaction from "@/components/pages/transaction.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "@/components/pages/not-found.tsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transaction/:id" element={<Transaction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
