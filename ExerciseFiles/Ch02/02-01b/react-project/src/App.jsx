import './App.css'

function Header({name, year}) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

function App() {
  return (
    <>
      <Header name="Jane" year={new Date().getFullYear()} />
      <main>
        <h2>Our food is the best!</h2>
      </main>
    </>
  );
}

export default App;
