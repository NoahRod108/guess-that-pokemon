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

const Tile = ({image, activeTiles}) => {
    // if(error){
    //     let randTile = Math.floor(Math.random() * tilesArray.length);
    //     console.log(randTile);
    // }


    // After every enter randomize which 5 squares are shown
    console.log(activeTiles)

    return (   
    <div data-guess-grid className='tile-grid'>
        {tilesArray.map((tile, i) =>(
            <div key={tile.id} className='tile'
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `-${tile.left}px -${tile.top}px`,
                }}>
                <div key={tile.id} className={activeTiles[i] === i ? "active" : "inactive"}
                    style={{
                        height: `${90}px`,
                        width: `${112}px`,
                    }}>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Tile