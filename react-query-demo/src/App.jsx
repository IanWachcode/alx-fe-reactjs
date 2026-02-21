import React from "react";
import PostsComponent from "./components/PostsComponent.jsx";
import { QueryClient, QueryClientProvider }  from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <QueryClientProvider client={queryClient}>
        <div className="bg-blue-600 text-white p-4 text-center">
        <PostsComponent />
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;