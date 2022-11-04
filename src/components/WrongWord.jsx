import React from 'react'

const WrongWord = ({wrongPokemon}) => {
  return (
    <>
        <div className="wrong-word">
            <ul>
                {wrongPokemon.map((p, i) => {
                    return(
                        <li key={i}>{p}</li>
                    )
                })}
            </ul>
        </div>
    </>
  )
}

export default WrongWord