import * as React from "react";

type Props = {
    setVal: (v: string) => void;
}

const Input: React.FC<Props> = ({setVal}) => {

    const [Inp, setInp] = React.useState('')

    const Push = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInp(e.target.value)
      setVal(e.target.value)
    }

    return(
        <input className='inp' value={Inp} onChange={Push} placeholder='Введите что-нибудь'/>
    )
}

export default Input