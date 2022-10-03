import * as React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
//import './App.css';
import Home from './pages/home/Home';
import MusicPlayer from './pages/music-player/MusicPlayer';

function App() {
  return (
    <div className="App bg-bg min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="music-player/*" element={<MusicPlayer />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </div>
  );
}

export default App;
