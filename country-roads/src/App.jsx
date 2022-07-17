import { Card } from "./components/card/Card";
import { HeroTab } from "./components/hero/Hero";
import { NavBar } from "./components/navbar/Navbar";
import artistData from "../artist.js";
import pics from "./statics/images/Lukecombs.png";

export const App = () => {
  const cardElement = artistData.map((data) => {
    return (
      <Card
        // making a key that is unique to each data in cards
        key={data.lyrics}
        props = {data}
      />
    );
  });

  return (
    <>
      <NavBar />
      {/* <HeroTab />
      <div className="card---props">{cardElement}</div> */}
    </>
  );
};

