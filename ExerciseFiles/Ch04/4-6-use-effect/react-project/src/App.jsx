import { useEffect, useReducer } from 'react'
import chef from './images/chef.jpg';
import './App.css'

function Header({name, year}) {
  return (
    <header>
      <h1>{name}'s Restaurant</h1>
      <p>Copyright {year}</p>
    </header>
  )
}

function Main({dishes, openStatus, onStatus}) { 
  return (
    <>
      <button onClick={()=> onStatus(!openStatus)} >
        {openStatus ? 'Close' : 'Open'} the restaurant
      </button>
      <h2>Welcome to our restaurant {openStatus ? 'Open' : 'Closed'}</h2>
      <main>
        <img src={chef} height={200} alt="Smiling Restaurant Chef" />
        <ul style={{listStyleType:'none'}}>
          {dishes.map(({id, title}) => <li key={id}>{title}</li>)}
        </ul>
      </main>
    </>
  );
}

const items = [
  'Macaroni and Cheese',
  'Salmon and Potatoes',
  'Tofu and Vegetables',
];

const dishObjects = items.map((dish, i) => (
  {
    id: i,
    title: dish,
  }
));


function App() {
  // const [status, setStatus] = useState('Open');
  // const [status, setStatus] = useState(true);
  const [status, toggleStatus] = useReducer((status)=>!status, true);

  useEffect(()=> {
    console.log(`The restaurant is ${status ? 'Open' : 'Closed'}`);
  }, []);

  return (
    <>
      <p>The restaurant is currently {status ? 'Open' : 'Closed'}.</p>
      <button onClick={
        // () => setStatus(!status)
        toggleStatus
      } >
        {status ? 'Close' : 'Open'} Restaurant
      </button>
      <Header name='Jane' year={new Date().getFullYear()} />
      <Main dishes={dishObjects} openStatus={status} onStatus={toggleStatus} />
    </>
  )
}

export default App
