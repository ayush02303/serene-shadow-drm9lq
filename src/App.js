import "./styles.css";
import "./Die.css";
import Greeter from "./Greeter";
import Die from "./Die";
import RandomPokemon from "./RandomPokemon";
import DoubleDice from "./DoubleDice";
import ColorList from "./ColorList";
import ListPicker from "./ListPicker";
import Heading from "./Heading";
import ShoppingList from "./ShoppingList";
import PropertyList from "../PropertyList";

const users = [
  { id: 1, name: "Ayush", age: 22 },
  { id: 2, name: "Priya", age: 24 },
  { id: 3, name: "Rahul", age: 21 },
];

const properties = [
  { id: 1, name: "Laptop", rating: 4.5, price: 69999.99 },
  { id: 2, name: "Smartphone", rating: 4.3, price: 39999.5 },
  { id: 3, name: "Headphones", rating: 4.0, price: 2499.0 },
  { id: 4, name: "Smartwatch", rating: 4.2, price: 7999.99 },
  { id: 5, name: "Monitor", rating: 4.6, price: 12999.75 },
  { id: 6, name: "Keyboard", rating: 4.1, price: 1599.95 },
];

export default function App() {
  return (
    <div className="App">
      <PropertyList properties={properties} />
      <ShoppingList items={users} />
      <Heading color="greenyellow" text="Ayush" />
      <ColorList colors={["red", "green", "purple", "teal"]} />
      <DoubleDice />
      <ListPicker values={[12, 34, 56, 78]} />
    </div>
  );
}
