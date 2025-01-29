"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import FetchData from "./FetchData";

export default function ProductCard() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <div>Hola Mundo</div>
      <FetchData />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
