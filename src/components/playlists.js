import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Song from './song';

const Playlists = props => {

    const [list, setList] = useState([]);

    useEffect(()=> {
        axios.get('https://api.allorigins.win/raw?url=https://api.deezer.com/playlist/' + props.number)
        .then(data => 
            setList(data.data))
    })

    let creator = null;
    let tracks = list.tracks;
    let save = [];
    let display = null;

    if (creator !== undefined && tracks !== undefined){
        creator = list.creator.name;
        save.push(tracks.data);

        display = save[0].map(item => {
            return (<Song artist={item.artist.name} song={item.title} picture={item.album.cover}></Song>);
        })
    }

    return (
        <div>
            <h3>Playlist</h3>
            <img></img>
            <h4>Title: {list.title}</h4>
            <h4>Creator: {creator}</h4>
            <p>{props.songs}</p>
            {display}
        </div>
    );
}

export default Playlists;