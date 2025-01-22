import './App.css'
import Card from './components/__organism/card.jsx'


import pizzaImage from './images/pizza.svg'
import forPizzaImage from './images/forPizza.svg'
import pizzaCaloriesImage from './images/pizzaCaloris.svg'
import tortelliniImage from './images/tortenili.svg'
import forTortelliniImage from './images/forTortelioni.svg'
import tortelliniCaloriesImage from './images/torteliniCaloris.svg'
import strawberryCakeImage from './images/marwyvi.svg'
import forStrawberryCakeImage from './images/forMarwyvi.svg'
import strawberryCakeCaloriesImage from './images/marwyviCaloris.svg'

function App() {
  return (
    <>
      <Card mtavari={pizzaImage} name={"Pepperoni Pizza"} ragac={forPizzaImage} text={"Premium pepperoni and cheese is made with real mozzarella on original  hand-tossed crust."} Calories={pizzaCaloriesImage} price={"$23.90"} oldPrice={"$29.90"}/>
      <Card mtavari={tortelliniImage} name={"Tortellini"} ragac={forTortelliniImage} text={"Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce."} Calories={tortelliniCaloriesImage} price={"$17.90"} oldPrice={"$22.90"}/>    
      <Card mtavari={strawberryCakeImage} name={"Strawberry Cake"} ragac={forStrawberryCakeImage} text={"Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."} Calories={strawberryCakeCaloriesImage} price={"$13.90"} oldPrice={"$18.90"}/>
    </>
  )
}

export default App