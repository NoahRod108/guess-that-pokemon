import React from 'react'

const KeyboardButtons = () => {
  return (
    <>
        <div className="key">Q</div>
        <div className="key">W</div>
        <div className="key">E</div>
        <div className="key">R</div>
        <div className="key">T</div>
        <div className="key">Y</div>
        <div className="key">U</div>
        <div className="key">I</div>
        <div className="key">O</div>
        <div className="key">P</div>
        <div className="space"></div>
        <div className="key">A</div>
        <div className="key">S</div>
        <div className="key">D</div>
        <div className="key">F</div>
        <div className="key">G</div>
        <div className="key">H</div>
        <div className="key">J</div>
        <div className="key">K</div>
        <div className="key">L</div>
        <div className="space"></div>
        <button className="key large" data-enter>Enter</button>
        <div className="key">Z</div>
        <div className="key">X</div>
        <div className="key">C</div>
        <div className="key">V</div>
        <div className="key">B</div>
        <div className="key">N</div>
        <div className="key">M</div>
        <button className="key large" data-delete>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
            </svg>
        </button>
    </>
    
  )
}

export default KeyboardButtons