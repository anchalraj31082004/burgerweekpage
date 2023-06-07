import BurgerStore from './components/BurgerStore'
import HeroSection from './components/HeroSection'
import ChooseContent from './components/ChooseContent'
import Burgers from './components/Burgers'
import FrenchFries from './components/FrenchFries'
import Registration from './components/Registration'

const App = () => {
  return (
    <div>
      <HeroSection/>
      <BurgerStore/>
      <ChooseContent/>
      <Burgers/>
      <FrenchFries/>
      <Registration/>
    </div>
  )
}

export default App
