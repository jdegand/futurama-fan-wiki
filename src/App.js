import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import CardDetail from './components/CardDetail';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch(`https://api.sampleapis.com/futurama/characters`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

    })
      .then((response) => response.json())
      .then((characters) => {
        setData(characters)
        sessionStorage.setItem("characters", JSON.stringify(characters))
      });

  }, [])

  const allCharacters = data.map((character, index) => <Card id={index} key={character.id} character={character} />)

  return (
    <HashRouter>
      <main className="App">
        <h1>Futurama Fan Wiki</h1>
        <div className="grid">
          <Routes>
            <Route path="/" element={allCharacters} />
            <Route path="/character/:id" element={<CardDetail character={data} />} />
          </Routes>
        </div>
      </main>
    </HashRouter>
  );
}

export default App;
