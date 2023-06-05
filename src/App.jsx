import BurgerStore from './components/BurgerStore'
import HeroSection from './components/HeroSection'
import Button from './components/Button'

const App = () => {
  return (
    <div>
      <HeroSection/>
      <BurgerStore/>
      <Button text= "Always Tasty Burger"/>
    </div>
  )
}

export default App
