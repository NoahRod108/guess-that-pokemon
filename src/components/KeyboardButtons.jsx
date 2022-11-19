import React from 'react'

const KeyboardButtons = () => {
  return (
    <>
        <div className="key" data-key="q">Q</div>
        <div className="key" data-key="w">W</div>
        <div className="key" data-key="e">E</div>
        <div className="key" data-key="r">R</div>
        <div className="key" data-key="t">T</div>
        <div className="key" data-key="y">Y</div>
        <div className="key" data-key="u">U</div>
        <div className="key" data-key="i">I</div>
        <div className="key" data-key="o">O</div>
        <div className="key" data-key="p">P</div>
        <div className="space"></div>
        <div className="key" data-key="a">A</div>
        <div className="key" data-key="s">S</div>
        <div className="key" data-key="d">D</div>
        <div className="key" data-key="f">F</div>
        <div className="key" data-key="g">G</div>
        <div className="key" data-key="h">H</div>
        <div className="key" data-key="j">J</div>
        <div className="key" data-key="k">K</div>
        <div className="key" data-key="l">L</div>
        <div className="space"></div>
        <button className="key large" data-enter>Enter</button>
        <div className="key" data-key="z">Z</div>
        <div className="key" data-key="x">X</div>
        <div className="key" data-key="c">C</div>
        <div className="key" data-key="v">V</div>
        <div className="key" data-key="b">B</div>
        <div className="key" data-key="n">N</div>
        <div className="key" data-key="m">M</div>
        <button className="key large" data-delete>
            <svg data-delete xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
            </svg>
        </button>
    </>
    
  )
}

export default KeyboardButtons