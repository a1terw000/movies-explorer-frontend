import AboutMe from '../AboutMe/AboutMe'
import AboutProject from '../AboutProject/AboutProject'
import Footer from '../Footer/Footer'
import HeaderAuth from '../HeaderAuth/HeaderAuth'
import HeaderUnAuth from '../HeaderUnAuth/HeaderUnAuth'
import Portfolio from '../Portfolio/Portfolio'
import Promo from '../Promo/Promo'
import Techs from '../Techs/Techs'
import './Main.css'

export default function Main({ loggedIn }) {
    return (
        <>
            {loggedIn ? <HeaderAuth /> : <HeaderUnAuth />}
            <main className='main'>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>

    )
}