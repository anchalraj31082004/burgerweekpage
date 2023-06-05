import '../styles/Navigation.css'
const Navigation = () => {
    return(
        <nav className="nav">
            <div className="logo">
                <img src="/images/logo.png" alt="" />
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Our Story</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation