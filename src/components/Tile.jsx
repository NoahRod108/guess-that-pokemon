import React from 'react'

let tilesArray = [];

for(let i = 0; i < 24; i++){
    //216 is divided by 5 same with 384 - image is 1000 x 667
    let tile={
        id: i,
        top: -(Math.floor(i / 5)) * 216,
        left: i < 5 ? i * 384 : -(i % 5) * 384
    }
    tilesArray.push(tile);
}

const Tile = () => {
  return (
    <div className="tile-container">
        <div className="tile-grid">
            {tilesArray.map((tile) =>(
                <div key={tile.id} className="tile" style={{top: `${tile.top}`, left: `${tile.left}`}}></div>
            ))}
        </div>
    </div>
  )
}

export default Tile