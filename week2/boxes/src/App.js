import React from 'react';
import BoxCard from './card';
import './App.css';

function App(){
  return(
    <div className="cardApp">
      <BoxCard
      title = "Title 1"
      subtitle = "Subtitle 1" 
      description = "Hello World 1"
      bgcolor = "red"
      width = "200px"
      />
      <BoxCard
      title = "Title 2"
      subtitle = "Subtitle 2" 
      description = "Hello World 2"
      bgcolor = "orange"
      width = "200px"
      />
      <BoxCard
      title = "Title 3"
      subtitle = "Subtitle 3" 
      description = "Hello World 3"
      bgcolor = "yellow"
      width = "200px"
      />
      <BoxCard
      title = "Title 4"
      subtitle = "Subtitle 4" 
      description = "Hello World 4"
      bgcolor = "green"
      width = "200px"
      />


    </div>
  )
}


export default App;
