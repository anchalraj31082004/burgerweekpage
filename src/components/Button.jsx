import "../styles/Button.css"

const Button = ({text}) => {
    return(
        <div className="btn">
        <button>{text}</button>
        </div>
    )
}

export default Button