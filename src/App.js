import axios from 'axios';
import { useEffect, useState } from 'react';
import Guess from './components/Guess';
import Header from './components/Header';
import KeyboardButtons from './components/KeyboardButtons';
import Notification from './components/Notification';
import Tile from './components/Tile';
import WrongWord from './components/WrongWord';
import './styles.css';
import Popup from './components/Popup';

function App() {
    const [play, setPlay] = useState(false);
    const [Pokemons, setPokemons] = useState([]);
    const [wrongGuess, setWrongGuess] = useState([]);
    const [activeTiles, setActiveTiles] = useState([]);
    const [notification, setNotification] = useState({});
    const [correctPokemon, setCorrectPokemon] = useState({name: '', image: ''});
    const [guess, setGuess] = useState('');
    const [attempts, setAttempts] = useState(0);

    useEffect(() => {
        let userkeyboard = '';
        let randTilesArray = [];

        const randomTiles = () => {
            const set = new Set();
            
            while(set.size < 5){
                set.add(Math.floor(Math.random() * 25));
            }

            set.forEach(function(value){
                randTilesArray.push(value);
            })

            setActiveTiles(randTilesArray);
            
            return randTilesArray;
        }
        
        randomTiles();
        
        // Handle keypress to type on virtual keyboard
        const handleKeyPress = (e) => {
            const {key} = e;

            if(play){
                if(key.match(/^[a-z]$/)){
                    userkeyboard += key;
                    userkeyboard = userkeyboard.substring(0, correctPokemon.name.length)
                    setGuess(userkeyboard);
                    return;
                }
                
                if(key === 'Enter'){
                    if(userkeyboard !== ''){
                        submitGuess(userkeyboard);
                    }
                    return;
                }

                if(key === 'Backspace' || 'Delete'){
                    userkeyboard = userkeyboard.slice(0, -1);
                    setGuess(userkeyboard);
                    return;
                }
            }
        }

        // Check if notification needs to be displayed
        const checkGuess = (userkeyboard) => {
            if(wrongGuess.includes(userkeyboard)){
                setNotification({show: true, type:'same_guess'})
                return false;
            }

            if(!Pokemons.includes(userkeyboard)){
                setNotification({show: true, type:'wrong_generation'})
                setWrongGuess([...wrongGuess, userkeyboard])
                return false;
            }
            
            setNotification({show: false, type:''});
            return true;
        }

        // Check if guess is the correct pokemon
        const submitGuess = (userkeyboard) => {
            if(userkeyboard === correctPokemon.name){
                setPlay(false);
            }

            if(userkeyboard !== correctPokemon.name){
                randomTiles();
                if(checkGuess(userkeyboard)){
                    setWrongGuess([...wrongGuess, userkeyboard])
                }
                setAttempts(attempts + 1);
            }

            userkeyboard = '';
            setGuess('');
        }

        window.addEventListener('keydown', handleKeyPress);

        return () => window.removeEventListener('keydown', handleKeyPress);

    }, [play, wrongGuess, correctPokemon.name, attempts])

    // function to call API and populate pokemon list
    const startGame = () => {
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

        setPlay(true);
    }

    if(notification.show){
        setTimeout(() =>{
            setNotification({show: false, type:''})
        }, 5000)
    }

  return (
    <>
        <div className='container'>
            <Header />
            <div className="tile-container">
                <Tile image={correctPokemon.image} activeTiles={activeTiles} play={play} />
                <div className='wrong-word-container'>
                    <WrongWord wrongPokemon={wrongGuess} />
                </div>
            </div>
            {notification.show && <Notification status={notification} />}
            <div className="guess-container">
                {play && <Guess correctPokemon={correctPokemon.name} guess={guess} />}
            </div>
            <div className="keyboard-container">
                {!play ? <button className='start-button' onClick={() => startGame()}>Start Game</button> : <KeyboardButtons />}
            </div>
        </div>
        <div className="popup-container">
            <Popup {...correctPokemon}/>
        </div>
    </>
  );
}

export default App;
