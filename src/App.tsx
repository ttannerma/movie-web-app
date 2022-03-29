import React from "react";
import { useGetAllMoviesQuery } from "services/api";

function App() {
  const { data, error, isLoading } = useGetAllMoviesQuery({});
  console.log(data, error, isLoading);
  return <div>test</div>;
}

export default App;
