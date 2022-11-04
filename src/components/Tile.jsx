import React from 'react'

let tilesArray = [];

for(let i = 0; i < 25; i++){
    //85 is divided by 5 same with 128 - image is 640 x 427
    let tile={
        id: i,
        top: (Math.floor(i / 5)) * 108,
        left: i < 5 ? i * 115 : (i % 5) * 115
    }
    tilesArray.push(tile);
}

const Tile = ({image}) => {
  return (   
    <>
        {tilesArray.map((tile) =>(
            <div key={tile.id} className="tile"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `-${tile.left}px -${tile.top}px`,
                }}>
                <div key={tile.id} className="tile" data-state="inactive" 
                style={{
                    height: `${90}px`,
                    width: `${112}px`,
                }}>
                </div>
            </div>
        ))}
    </> 
  )
}

export default Tile