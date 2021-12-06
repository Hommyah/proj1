import * as React from "react";
import {useEffect} from "react";

type Props = {

    styles: any;
    setActive: ()=>void
}

const Notify: React.FC<Props> = ({styles, setActive}) => {

    const [state, setState] = React.useState('')
    const [txt, setTxt] = React.useState('')

    useEffect(() => {
        let flag = Math.random()
        console.log(flag)
        if (flag >= 0.5) {
            setState('success')
            setTxt('Успех')
        } else {
            setState('error')
            setTxt('Ошибка')
        }
    }, [styles])

    return (
        <div style={styles} className={state}>{txt}</div>
    )
}

export default Notify;