import Button from "./Button"
import   "../styles/ChooseContent.css"

const ChooseContent = () => {
  return (
    <div className="content-cont">
        <div>
            <Button text= {"Always Tasty Burger"} color={"#ffb234"}/>
        </div>
        <div className="content">
            <h3>CHOOSE & ENJOY</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aperiam fuga, doloribus inventore harum sequi. <br /> Odit amet ea vitae numquam placeat similique eos porro esse.</p>
        </div>
      
    </div>
  )
}

export default ChooseContent
