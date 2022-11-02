import React from 'react'

let tilesArray = [];

for(let i = 0; i < 25; i++){
    //85 is divided by 5 same with 128 - image is 640 x 427
    let tile={
        id: i,
        top: -(Math.floor(i / 5)) * 85,
        left: i < 5 ? i * 128 : -(i % 5) * 128
    }
    tilesArray.push(tile);
}

const Tile = () => {
  return (
    <div className="tile-container">
        <div className="tile-grid">
            {tilesArray.map((tile) =>(
                <div key={tile.id} className="tile" style={{backgroundPosition: `-${tile.left}px -${tile.top}px`, height: `${85}px`, width: `${128}`}}>{tile.id}</div>
            ))}
        </div>
    </div>
  )
}

export default Tile