import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Calculator from "./pages/calculator";
import List from "./pages/list";
import Notification from "./pages/notification";
import Square from "./pages/square";
import Slider from "./pages/slider";
import {SliderData} from "./pages/slider/sliderData";
import Header from "./header";

function App() {
  return (
      <div className='App'>
          <BrowserRouter>
              <Header/>
              <Route exact path='/slider' component={SliderProps}/>
              <Route exact path='/calculator' component={Calculator}/>
              <Route exact path='/notice' component={Notification}/>
              <Route exact path='/list' component={List}/>
              <Route exact path='/square' component={Square}/>
          </BrowserRouter>
      </div>

  );
}

const SliderProps= () => <div>
    <Slider slides={SliderData}/>
</div>

export default App;
