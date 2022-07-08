import './hero.css'
import heroImg from '../../statics/images/hero-tab-logo.png'

export const HeroTab = () => {
    return(
        <section className='hero'>
        <img src={heroImg} alt="image-top" className='hero--photo'/>
        <h1 className='hero--header'>Your Favorite country artists </h1>
        <p className='hero--text'>
            What i thought was gonna be the death of me was my saving grace. Ain't gon see my ex future mother inlaw any more , When it rains it pours.
        </p>
        </section>
    )
}