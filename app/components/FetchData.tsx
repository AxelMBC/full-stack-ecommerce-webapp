import { useQuery } from "@tanstack/react-query";

async function featchChess() {
  const res = fetch("https://api.chess.com/pub/titled/GM")
    .then((response) => response.json())
    .catch((err) => console.error(err)); // Make sure this path is correct

  return res;
}

export default function FetchData() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["users"],
    queryFn: featchChess,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  console.log("data: ", data);

  return (
    <ul>
      {data.players.map((item: string, index: number) => (
        <p key={index}>{item}</p>
      ))}
    </ul>
  );
}
