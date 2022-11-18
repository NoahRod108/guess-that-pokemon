import React from 'react'

const Popup = ({name, image, playAgain, attempts}) => {
  return (
    <div className="popup">
        <div className="btn-section">
            <div className="sensor"></div>
            <div className="pokedex-light"></div>
            <div className="pokedex-light"></div>
            <div className="pokedex-light"></div>
        </div>

        <div className="popup-screen">
            <img src={`${image}`} alt={`${name}`} />
            {/* Might use below div for limited tries and reveal the correct answer inside of div */}
            {/* <h3 className="final-reveal"></h3> */}
        </div>
        <h2 className="final-message">You caught a {name}!</h2>
        <p>Used {attempts} {attempts === 1 ? 'pokeball' : 'pokeballs'} </p>

        <div className="pokedex-btn"></div>
        <div className="pokedex-btn"></div>
        <div className="pokedex-btn"></div>
        <button className="play-button" onClick={playAgain}>Play Again!</button>
    </div>
  )
}

export default Popup