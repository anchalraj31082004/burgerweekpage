import "../styles/Registration.css"
import Button from "./Button"

const Registration = () => {
  return (
    <div className="registration">
        <div className="reg-content">
            <h6>RESERVATION</h6>
            <h3>BOOK YOUR TABLE</h3>
        </div>
        <form className="form">
            <input type="text" name="name" placeholder="Name" className="I1 input" />
            <input type="email" name="email" placeholder="Email" className="I2 input" />
            <input type="date" name="date" placeholder="Date" className="I3 input" />
            <input type="number" name="time" placeholder="Time" className="I4 input" />
            <input type="text" name="people" placeholder="People" className="I5 input" />
            <Button text={"Find A Table"} color={"red"}  className="I6" />
        </form>
    </div>
  )
}

export default Registration
