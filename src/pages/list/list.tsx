import * as React from "react";
import './list.css'
import Input from "./components/input";
import BtnByPush from "./components/BtnByPush";
import Point from "./components/point";
import BtnByClear from "./components/btnByClear";

const List = () => {

    const [value, setValue] = React.useState('')
    const [point, setPnt] = React.useState('')
    const [push, setPsh] = React.useState('')
    const [clear, setClear] = React.useState('')

    return(
        <div className="list">
            <Input setVal={(v:string)=>setValue(v)}/>
            <BtnByPush setPush={(p:string
            )=>setPsh(p)}/>

            <li>
                <p><Point text={push} setPoint={(pnt:string)=>setPnt(pnt)}/></p>
            </li>

            <BtnByClear setClean={setClear}/>
        </div>
    )
}

export default List