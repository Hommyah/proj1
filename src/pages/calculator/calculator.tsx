import * as React from "react";
import "./calculator.css"
import Input1 from "./components/input1";
import Button from "./components";

const Calculator = () => {

    const [nmb1, setNmb1] = React.useState(0.0)
    const [nmb2, setNmb2] = React.useState(0.0)
    const [res, setRes] = React.useState(0.0)

    return (
        <div>
            <Input1 setValue={(v: number)=>{setNmb1(v)}}/>
            <Input1 setValue={(v: number)=>{setNmb2(v)}}/>
            <Button num1={nmb1} num2={nmb2} func={'+'} setResult={(r:number) => {setRes(r)}}/>
            <Button num1={nmb1} num2={nmb2} func={'-'} setResult={(r:number) => {setRes(r)}}/>
            <Button num1={nmb1} num2={nmb2} func={'*'} setResult={(r:number) => {setRes(r)}}/>
            <Button num1={nmb1} num2={nmb2} func={'/'} setResult={(r:number) => {setRes(r)}}/>
            <div>Равно {res}</div>
        </div>
    )
}

export default Calculator