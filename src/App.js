import React, { useState } from 'react';
import Profile from './components/profile';
import Playlists from './components/playlists';
import Input from './components/input';

function App() {

  const [number, setNumber] = useState('');

  let getData = (urlNumber) => {
    setNumber(urlNumber);
  }

  return (
    <div className="App">
      <Input sendData={getData}></Input>
      <Playlists number={number}></Playlists>
    </div>
  );
}

export default App;
