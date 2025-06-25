import './App.css'

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
    <ul style={{listStyle: 'none'}}>
      {dishes.map(dish => <li key={dish.id}>{dish.title}</li>)}
    </ul>
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
