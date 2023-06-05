import "../styles/HeroSection.css"
import Navigation from "./Navigation"
const HeroSection = () => {
    return(
        <header className="container">
            <Navigation/>
            <div className="hero">
            <div className="hero-content">
                <p>It is good time for great taste of burger.</p>
                <h1>BURGER</h1>
                <h3>WEEK</h3>
            </div>
            <div className="img">
                <img src="/images/heroburger.png" alt="img" />
            </div>
        </div>
        </header>
    )
}

export default HeroSection