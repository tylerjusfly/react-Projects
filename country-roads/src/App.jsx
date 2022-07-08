import { Card } from "./components/card/Card"
import { HeroTab } from "./components/hero/Hero"
import { NavBar } from "./components/navbar/Navbar"

export const App = () => {
    return(
        <>
        <NavBar/>
        <HeroTab/>
        <Card 
        name="Luke Combs"
        image = "https://images.genius.com/e42fd08ccb70751a97405ef1617ca1ef.1000x1000x1.jpg"
        songTitle = "Forever After All"
        release_date = "March 30, 2010"
        />
        <Card  
        name="Lucinda Williams"
        image= "https://images.genius.com/634feb9870ddec496e07341dc2526f5d.400x399x1.jpg"
        songTitle= "2 Kool 2 Be 4-Gotten"
        />
        <Card  
        name="Keith Whitley"
        image= "https://images.genius.com/c985db3e64dc9a00682083c79d00900d.1000x1000x1.jpg"
        songTitle="I Never Go Around Mirrors"
        />
        <Card  
        name="Alan Jackson"
        image = "https://images.genius.com/cdcd13c9600a460acfd912d66aaac109.268x265x1.png"
        songTitle = "Where Were You (When The World Stopped Turning)"
        />
        </>
    )
}