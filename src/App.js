import React from 'react'
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className = "app__body">
      <div className = "app__body__left">
          <h1 className = "app__body__left__head">Where the world builds software</h1>
          <p className = "app__body__left__para">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
      </div>
      <div className = "app__body__right">
          <h1 className = "app__body__right__head">Where the world builds software</h1> 
          <p className = "app__body__right__para">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>     
      </div>
      </div>
      <hr/>
      <div className = "footer">
        <h1>All Rights Reserved @2021</h1>
      </div>
    </div>
  );
}

export default App;
