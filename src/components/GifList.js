import React from 'react';

const GifList = props => {
    
    return(
        <div>
            <ul>
            {props.gifs.map((gif =>
                <li><img key={gif.url} src={gif.url} alt="gif"/></li>))}
            </ul>
        </div>
    )

}

export default GifList;