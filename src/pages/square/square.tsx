import * as React from "react";
import "./square.css"

const Square = () => {

  const [green, setGreen] = React.useState({opacity: 1})
  const [red, setRed] = React.useState({opacity: 0})

  const GreenClick = () => {
    setGreen({opacity: 0})
    setRed({opacity: 1})
  }

  const RedClick = () => {
    setRed({opacity: 0})
    setGreen({opacity: 1})
  }

  return(
      <div className='squares'>
        <div className='blue'/>
        <button style={green} onClick={GreenClick} className='green'/>
        <button style={red} onClick={RedClick} className='red'/>
      </div>
  )
}

export default Square