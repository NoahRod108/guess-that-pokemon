import React from 'react'

const WrongWord = ({wrongPokemon}) => {
  return (
    <>
        <h2>Wrong Answers</h2>
        <div className="wrong-word">
            <ul>
                {wrongPokemon.map((pokemon, i) => {
                    return(
                        <li key={i}>{pokemon}</li>
                    )
                })}
            </ul>
        </div>
    </>
  )
}

export default WrongWord