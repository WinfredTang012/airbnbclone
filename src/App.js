import './App.css';
import Navbar from "./components/Navbar";
import Upper from "./components/Upper";
import Cards from "./components/Cards";
import data from "./data";

const cards = data.map((item) => {
  return <Cards key={item.id} item={item} />;
});

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Upper />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

