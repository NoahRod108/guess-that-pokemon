import React from 'react'

const Guess = ({correctPokemon, guess}) => {
    let guessLetters = guess.split('');
    let correctPokemonLetters = correctPokemon.split('');
    
  return (
    <>
        {correctPokemonLetters.map((letter, i) => {
            return(
              <span className="letter" key={i} id={`letter-${i}`}>
                {
                    guessLetters[i]
                }
              </span>
            )
        })}
    </>
  )
}

export default Guess