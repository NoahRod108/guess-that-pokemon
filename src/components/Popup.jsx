import React from 'react'

const Popup = ({name, image}) => {
  return (
    <div className="popup">
        <h2 className="final-message">You caught a {name}!</h2>
        <img src={`${image}`} alt={`${name}`} />
        {/* Might use below div for limited tries and reveal the correct answer inside of div */}
        {/* <h3 className="final-reveal"></h3> */}
        <button className="play-button">Play Again!</button>
    </div>
  )
}

export default Popup