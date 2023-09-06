import Banner from "./Banner"
import { HeroMain, HeroServices, HeroThird, HeroFourth } from "./HeroItems"


const Hero = () => {
    return(
        <>
            <HeroMain />
            <HeroServices />
            <HeroThird />
            <HeroFourth />
            <Banner />
        </>
    )
}

export default Hero