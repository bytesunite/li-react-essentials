import './App.css'
import chef from './images/chef.jpg';

function Header({name, date}){
  return (
    <header>
      <h1>{name}'s Diner</h1>
      <p>Copyright {date}</p>
    </header>
  )
}

function Main({dishes}){
  return (
    <>
      <h2>Welcome to this amazing restaurant</h2>
      <main>
        <img src={chef} alt='Restaurant Chef' height={200} />
        <ul style={{listStyle: 'none'}}>
          {dishes.map(dish => <li key={dish.id}>{dish.title}</li>)}
        </ul>
      </main>
    </>
  );
}

const items = [
  'Macaroni and Cheese',
  'Salmon & Potatoes',
  'Tofu and Vegetables',
];

const dishObjects = items.map((dish, index) => ({
  id: index,
  title: dish
}));

function App() {
  return (
    <>
      <Header name="Dan" date={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </>
  );
}

export default App

