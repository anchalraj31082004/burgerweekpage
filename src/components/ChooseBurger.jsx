import "../styles/ChooseBurger.css"
import Button from "./Button"
const ChooseBurger = (props) => {
    return(
        <>
        <div className="burger-section">
            <div>
                <img src={`/images/${props.img}`} alt="" />
            </div>
            <div className="content">
                <h3>Lorem Ipsum Dolor.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, autem.</p>
            </div>
            <div>
                <Button text={"Order Now"} color={"red"}/>
            </div>
        </div>
        </>
    )
}

export default ChooseBurger