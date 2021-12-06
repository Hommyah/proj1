import React from 'react';
import './App.css';
import Calculator from "./pages/calculator";
import List from "./pages/list";
import Notification from "./pages/notification";
import Square from "./pages/square";
import Slider from "./pages/slider";
import {SliderData} from "./pages/slider/sliderData";

function App() {
  return (
    <div className="App">
      <Slider slides={SliderData}/>
    </div>
  );
}

export default App;
