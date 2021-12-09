import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Calculator from "./pages/calculator";
import List from "./pages/list";
import Notification from "./pages/notification";
import Square from "./pages/square";
import Slider from "./pages/slider";
import {SliderData} from "./pages/slider/sliderData";

function App() {
  return (
      <div className='App'>
          <BrowserRouter>
              <Route path='/slider' component={SliderProps}/>
              <Route path='/calculator' component={Calculator}/>
              <Route path='/notice' component={Notification}/>
              <Route path='/list' component={List}/>
              <Route path='/square' component={Square}/>
          </BrowserRouter>
      </div>

  );
}

const SliderProps= () => <div>
    <Slider slides={SliderData}/>
</div>

export default App;
