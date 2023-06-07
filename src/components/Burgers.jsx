// import "../styles/Burgers.css"
import ChooseBurger from "./ChooseBurger"

const Burgers = () => {
  return (
    <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"space-around",
      padding:"100px 0"
    }}>
      <ChooseBurger img={"leftimg.png"}/>
      <ChooseBurger img={"middleimg.png"}/>
      <ChooseBurger img={"leftimg.png"}/>
    </div>
  )
}

export default Burgers
