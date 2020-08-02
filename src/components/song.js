import React from 'react';

const Song = props => {
    return (
        <div>
            <img src={props.picture}></img>
            <h5>Artist: {props.artist}</h5>
            <h5>Song: {props.song}</h5>
        </div>
    )
}

export default Song;