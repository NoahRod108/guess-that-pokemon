import axios from 'axios';
import { useEffect, useState } from 'react';
import Guess from './components/Guess';
import Header from './components/Header';
import KeyboardButtons from './components/KeyboardButtons';
import Tile from './components/Tile';
import WrongWord from './components/WrongWord';
import './styles.css';

let pokemonList = [];
let wrongGuess = [];
let play = true;

function App() {
    const [play, setPlay] = useState(true);
    const [pokemons, setPokemon] = useState([{}]);
    const [correctPokemon, setCorrectPokemon] = useState('');

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then(res => {
            setPokemon(res.data.results.map(p => p.name));
            // Randomly pick a pokemon, make new axios call https://pokeapi.co/api/v2/pokemon/${pokemonName}
            let rand = res.data.results[Math.floor(Math.random() * res.data.results.length)];
            axios.get(`https://pokeapi.co/api/v2/pokemon/${rand.name}`).then(res => {
                let pokemon = [
                    {
                        name: res.data.name,
                        image: res.data.sprites.other.home.front_default
                    }
                ]

                setCorrectPokemon(pokemon);
            })
        })
        

    }, [])


  return (
    <div className='container'>
        <Header />
        <div className="tile-container">
            <div className="tile-grid">
                <Tile />
            </div>
        </div>
        <div className='wrong-word-container'>
            <WrongWord />
        </div>
        <div className="guess">
            <Guess />
        </div>
        <div className="keyboard">
            <KeyboardButtons />
        </div> 
    </div>
  );
}

export default App;
