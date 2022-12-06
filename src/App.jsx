import './App.css'
import React, { useState,useEffect} from 'react';
import SearchUser from './searchUser';
function App() {
  return (
    <div className="App">   
      <h1>Search Git users public gist detail</h1>
      <div className="card">
      <SearchUser/>
      </div>
     
    </div>
  )
}

export default App
