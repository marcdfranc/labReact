import { Banner } from "./components/Banner";
import { Houses } from "./components/Houses";

export default async function Home() {
  const houses = await fetch("http://localhost:4000/houses?_embed=bids").then(
    (r) => r.json(),
  );
  return (
    <>
      <Houses houses={houses}></Houses>
    </>
  );
}
