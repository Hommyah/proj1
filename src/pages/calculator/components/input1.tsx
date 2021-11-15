import React, {useEffect} from "react";

type Props = {
    defaultValue?: string
    setValue?: (v: number) => void
}

const isValid = (val: string): boolean => {
    // проверка на вхождение только разрешенных символов + минус и точка встречаются не более одного раза
    return !((val && (!/^[0-9.-]+$/.test(val))) ||
        ((val.match(/\./g) || []).length > 1) ||
        ((val.match(/\-/g) || []).length > 1));
}

const Input1: React.FC<Props> = ({defaultValue, setValue}) => {

    const [number1, setNumber1] = React.useState("");

    useEffect(() => {
        if (!setValue) return;
        let res = parseFloat(number1);
        if (isNaN(res)) {
            setValue(0);
        }
    }, [number1, setValue])

    const Num1 = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let val: string = e.target.value;
        if (!val) {
            setNumber1("");
            return;
        }
        if (val.startsWith('.')) {
            setNumber1('0.')
            return;
        }
        if (!isValid(val)) {
            return;
        }

        if (val.endsWith(".") || val.endsWith("0") || val === "-") {
            setNumber1(val)
            return;
        }
        let nums = parseFloat(val)
        if (setValue) {
            setValue(nums);
        }
        setNumber1(nums.toString())
    }, [setValue])

    return (
        <input className='num' onChange={Num1} value={number1} placeholder="Введите число"/>
    )
}

export default Input1