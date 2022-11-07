import React from 'react'

const Guess = ({correctPokemon, guess}) => {
  return (
    <>
        {correctPokemon.split('').map((letter, i) => {
            return(
                <span className="letter" key={i} id={`letter-${i}`}>{!guess ? '' : 
                    guess.split('').map((guessLetter, i) => {
                        if(guess.length <= correctPokemon.length){
                            document.getElementById(`letter-${i}`).innerHTML = guessLetter
            
                            if(document.getElementById(`letter-${i + 1}`) !== null){
                                if(document.getElementById(`letter-${i + 1}`).innerHTML !== ''){
                                    document.getElementById(`letter-${i + 1}`).innerHTML = '';
                                }
                            }
                        }
                    })
                }</span>
            )
        })}
    </>
  )
}

export default Guess