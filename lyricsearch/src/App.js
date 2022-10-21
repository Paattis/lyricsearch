import React from 'react';
import { useState, useEffect } from 'react';



const App = () => {


    const [songs, setSongs] = useState([]);
    const [lyric, setLyric] = useState('');

    const search = async (lyrics) => {
      fetch(`http://127.0.0.1:8000/search/${lyrics}`).then(r => r.json()).then(data => setSongs(data.message.body.track_list))//.then(data => setSongs(data.message.body.track_list))
    }


    return (
      <>
        <input onChange={(e) => setLyric(e.target.value)}></input>
        <button type="submit" onClick={x => search(lyric)}>Hae</button>
        <h4>Search songs that have the word "{lyric}"</h4>

        {songs.map((s) => (<div>{s.track.artist_name} - {s.track.track_name}</div>))}
      </>
    ) ; 
}

export default App;
