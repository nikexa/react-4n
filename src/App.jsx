import './App.css'
import Card from './components/__organism/card.jsx'

function App() {

  return (
    <>
    <Card mtavari={"./src/images/pizza.svg"} name={"Pepperoni Pizza"} ragac={"src/images/forPizza.svg"} text={"Premium pepperoni and cheese is made with real mozzarella on original <br /> hand-tossed crust."} Calories={"src/images/pizzaCaloris.svg"} price={"$23.90"} oldPrice={"$29.90"}/>
    <Card mtavari={"./src/images/tortenili.svg"} name={"Tortellini"} ragac={"src/images/forTortelioni.svg"} text={"Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce."} Calories={"src/images/torteliniCaloris.svg"} price={"$17.90"} oldPrice={"$22.90"}/>    
    <Card mtavari={"./src/images/marwyvi.svg"} name={"Strawberry Cake"} ragac={"src/images/forMarwyvi.svg"} text={"Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."} Calories={"src/images/marwyviCaloris.svg"} price={"$13.90"} oldPrice={"$18.90"}/>
    </>
  )
}

export default App
