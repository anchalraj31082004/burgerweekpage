import "../styles/BurgerStore.css";

const BurgerStore = () => {
    return (
        <>
        <div className="burger-container">
            <div className="left">
                <div className="burger-txt">
                    <h4>Try it today</h4>
                    <h3>Most Popular Burger</h3>
                </div>
            </div>
            <div className="right ">
                <div className="right-top burger-txt ">
                    <h4>Try it today</h4>
                    <h3>More Fun <br /> More Taste</h3>
                </div>
                <div className="right-bottom burger-txt">
                    <h4>Try it today</h4>
                    <h3>Fresh & Chili</h3>
                </div>
            </div>
        </div>
        </>
    )
}
export default BurgerStore