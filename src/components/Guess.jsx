import React from 'react'

const Guess = ({correctPokemon, guess}) => {
    console.log(guess)
  return (
    <>
        {correctPokemon.split('').map((letter, i) => {
                return(
                    <span className="letter" key={i}>
                        
                    </span>
                )
        })}
    </>
  )
}

export default Guess