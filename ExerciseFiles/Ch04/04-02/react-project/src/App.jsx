import { useState } from 'react'
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

function Main({dishes}) { 
  return (
    <main>
      <img src={chef} height={200} alt="Smiling Restaurant Chef" />
      <ul style={{listStyleType:'none'}}>
        {dishes.map(({id, title}) => <li key={id}>{title}</li>)}
      </ul>
    </main>
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
  const [status, setStatus] = useState("Open");

  //const handleClick = () => {
  //  setStatus((prevStatus) => {
  //    return prevStatus === 'Open' ? 'Closed' : 'Open';
  //  })
  //}

  return (
    <>
      <p>The restaurant is currently {status}.</p>
      <button onClick={() => setStatus('Closed')} >
        Status
      </button>
      <Header name='Jane' year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </>
  )
}

export default App
