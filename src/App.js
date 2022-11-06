import axios from 'axios';
import { useEffect, useState } from 'react';
import Guess from './components/Guess';
import Header from './components/Header';
import KeyboardButtons from './components/KeyboardButtons';
import Tile from './components/Tile';
import WrongWord from './components/WrongWord';
import './styles.css';

let play = true;
let userkeyboard = '';
let wrongPokemon = []

function App() {
    const [play, setPlay] = useState(true);
    const [Pokemons, setPokemons] = useState([]);
    const [guess, setGuess] = useState('');
    const [correctPokemon, setCorrectPokemon] = useState({name: '', image: ''});

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then(res => {
            setPokemons(res.data.results.map(p => p.name));

            // Randomly pick a pokemon, make new axios call https://pokeapi.co/api/v2/pokemon/${pokemonName}
            let rand = res.data.results[Math.floor(Math.random() * res.data.results.length)];
            axios.get(`https://pokeapi.co/api/v2/pokemon/${rand.name}`).then(res => {
                let pokemon = {
                        name: res.data.name,
                        image: res.data.sprites.other.home.front_default
                    }

                setCorrectPokemon(pokemon);
            })
        })
        
        const handleKeyPress = (e) => {
            const {key} = e;

            if(play){
                if(key.match(/^[a-z]$/)){
                    userkeyboard += key;
                    setGuess(userkeyboard);
                    return;
                }
                
                if(key === 'Enter'){
                    submitGuess(userkeyboard);
                    return;
                }

                if(key === 'Backspace' || 'Delete'){
                    userkeyboard = userkeyboard.slice(0, -1);
                    setGuess(userkeyboard);
                    return;
                }

            }
        }

        const submitGuess = (userkeyboard) => {
            if(userkeyboard === correctPokemon.name){
                console.log("Win");
            }

            if(userkeyboard !== correctPokemon.name){
                wrongPokemon.push(userkeyboard);
                userkeyboard = ''
                setGuess(userkeyboard);
            }
            
        }

        window.addEventListener('keydown', handleKeyPress);

        return () => window.removeEventListener('keydown', handleKeyPress);

    }, [play])

  return (
    <div className='container'>
        <Header />
        <div className="tile-container">
            <div className="tile-grid">
                <Tile image={correctPokemon.image}/>
            </div>
            <div className='wrong-word-container'>
                <WrongWord wrongPokemon={wrongPokemon} />
            </div>
        </div>
        <div className="guess-container">
            <Guess correctPokemon={correctPokemon.name} guess={guess} />
        </div>
        <div className="keyboard-container">
            <KeyboardButtons />
        </div> 
    </div>
  );
}

export default App;
