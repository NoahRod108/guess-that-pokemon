import React from 'react'

const Popup = ({pokemon}) => {
  return (
    <div className="popup">
        <h2 className="final-message">You caught a {pokemon}!</h2>
        {/* Might use below div for limited tries and reveal the correct answer inside of div */}
        {/* <h3 className="final-reveal"></h3> */}
        <button className="play-button">Play Again!</button>
    </div>
  )
}

export default Popup