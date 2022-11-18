import React from 'react'
import { useMediaQuery } from 'react-responsive';

const Tile = ({image, activeTiles, play}) => {
let tilesArray = [];
const isMobile = useMediaQuery({ query: `(max-width: 670px)` });

if(isMobile){
    for(let i = 0; i < 15; i++){
        //image is 640 x 427
        let tile={
            id: i,
            top: (Math.floor(i / 3)) * 90,
            left: i < 3 ? i * 100 : (i % 3) * 100,
            width: 320,
            height: 320
        }
        tilesArray.push(tile);
    }
}else{
    for(let i = 0; i < 25; i++){
        //image is 640 x 427
        let tile={
            id: i,
            top: (Math.floor(i / 5)) * 108,
            left: i < 5 ? i * 115 : (i % 5) * 115
        }
        tilesArray.push(tile);
    }
}

    return (   
    <div data-guess-grid className='tile-grid'>
        {tilesArray.map((tile, i) =>(
            <div key={tile.id} className='tile'
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `-${tile.left}px -${tile.top}px`,
                    backgroundSize: isMobile ? '320px 420px' : 'auto auto',
                }}>
                <div key={tile.id} className={activeTiles.includes(tile.id) && play ? "active" : "inactive"}></div>
            </div>
        ))}
    </div>
  )
}

export default Tile