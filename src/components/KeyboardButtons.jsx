import React from 'react'

const KeyboardButtons = () => {
  return (
    <>
        <div className="key" data-key="Q">Q</div>
        <div className="key" data-key="W">W</div>
        <div className="key" data-key="E">E</div>
        <div className="key" data-key="R">R</div>
        <div className="key" data-key="T">T</div>
        <div className="key" data-key="Y">Y</div>
        <div className="key" data-key="U">U</div>
        <div className="key" data-key="I">I</div>
        <div className="key" data-key="O">O</div>
        <div className="key" data-key="P">P</div>
        <div className="space"></div>
        <div className="key" data-key="A">A</div>
        <div className="key" data-key="S">S</div>
        <div className="key" data-key="D">D</div>
        <div className="key" data-key="F">F</div>
        <div className="key" data-key="G">G</div>
        <div className="key" data-key="H">H</div>
        <div className="key" data-key="J">J</div>
        <div className="key" data-key="K">K</div>
        <div className="key" data-key="L">L</div>
        <div className="space"></div>
        <button className="key large" data-enter>Enter</button>
        <div className="key" data-key="Z">Z</div>
        <div className="key" data-key="X">X</div>
        <div className="key" data-key="C">C</div>
        <div className="key" data-key="V">V</div>
        <div className="key" data-key="B">B</div>
        <div className="key" data-key="N">N</div>
        <div className="key" data-key="M">M</div>
        <button className="key large" data-delete>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
            </svg>
        </button>
    </>
    
  )
}

export default KeyboardButtons