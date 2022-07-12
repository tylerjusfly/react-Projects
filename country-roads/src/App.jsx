import { Card } from "./components/card/Card";
import { HeroTab } from "./components/hero/Hero";
import { NavBar } from "./components/navbar/Navbar";
import artistData from "../artist.js";
import pics from "./statics/images/Lukecombs.png";

export const App = () => {
  const cardElement = artistData.map((data) => {
    return (
      <Card
        image={data.image_url}
        alt={data.artist_names}
        name={data.artist_names}
        songTitle={data.title}
        date={data.release_date}
        verified={data.verified}
      />
    );
  });

  return (
    <>
      <NavBar />
      <HeroTab />
      {cardElement}
    </>
  );
};

// import { Joke } from "./components/joke/Joke"

// export const App = () => {
//     return(
//         <>
//         <Joke
//         joke = 'dicta saepe voluptas maiores eveniet amet quaerat fugit vitae, odio totam sit.'
//         isPun = {true}
//         downvotes = {4}
//         comments ={['nice', 'what!!!']}
//         />
//         <Joke
//         setup = ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quis rem ratione'
//         joke = 'dicta saepe voluptas maiores eveniet amet quaerat fugit vitae, odio totam sit.'
//         isPun = {true}
//         downvotes = {5}
//         />
//         <Joke
//         setup = ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil facere porro'
//         joke = 'dicta saepe voluptas maiores eveniet amet quaerat fugit vitae, odio totam sit.'
//         isPun = {false}
//         downvotes = {10}
//         />
//         <Joke
//         setup = ' Lorem, ipsum dolor sit amet elit. Nihil quis rem ratione fconsectetur adipisicing '
//         joke = 'dicta saepe voluptas maiores eveniet amet quaerat fugit vitae, odio totam sit.'
//         isPun = {true}
//         downvotes = {0}
//         />
//         <Joke
//         setup = ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil facere porro'
//         joke = 'dicta saepe voluptas maiores eveniet amet quaerat fugit vitae, odio totam sit.'
//         isPun = {false}
//         downvotes = {10}
//         />
//         </>
//     )
// }
