import React, { useState } from 'react';
import '../styles/App.css';
import image from './image.jpeg';
const App = () => {
  const [height, setHeight] = useState(320);
  const [width, setWidth] = useState(320);

  const handleHeightChange = (event) => {
    setHeight(parseInt(event.target.value));
  };

  const handleWidthChange = (event) => {
    setWidth(parseInt(event.target.value));
  };

  return (
    <div id="main">
      <img id="resizable-img" src={image} alt="resizable" height={height} width={width} />
      <div>
        <label htmlFor="height-slider">Height: </label>
        <input type="range" id="height-slider" name="height-slider" min="100" max="800" value={height} onChange={handleHeightChange} />
      </div>
      <div>
        <label htmlFor="width-slider">Width: </label>
        <input type="range" id="width-slider" name="width-slider" min="100" max="800" value={width} onChange={handleWidthChange} />
      </div>
    </div>
  );
};

export default App;
