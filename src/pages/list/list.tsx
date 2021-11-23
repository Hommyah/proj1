import * as React from "react";
import './list.css'
import Point from "./components/point";

const List = () => {

    const [value, setValue] = React.useState('')
    const [list, setList] = React.useState<Array<string>>([])

    const Inp = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const Push = () => {
        if (value === '') {
            return
        }
        let old = [...list]
        old.push(value)
        setList(old)
        setValue('')
    }

    return(
        <div className="list">
            <input className='inp' value={value} onChange={Inp} placeholder='Введите что-нибудь'/>
            <div className='btn'>
                <button onClick={Push}>Добавить пункт</button>
                <div>{list.map((l, i)=>(<Point key={i} text={l}/>))}</div>
            </div>
            {/*<BtnByClear setClean={setClear}/>*/}
        </div>
    )
}

export default List