import React from "react";

type Props = {
    num1: number;
    num2: number;
    func: string;
    setResult: (r: number)=>void;
}

const Button: React.FC<Props> = ({num1, num2, func, setResult}) => {
    const Res = () => {
        let res: number
        switch (func) {
            case '+':
                res = num1 + num2;
                break;
            case '-':
                res = num1 - num2
                break;
            case '/':
                if (num2===0) {
                    alert('На ноль делить нельзя')
                    return
                } else {
                    res = num1 / num2}
                break;
            case '*':
                res = num1 * num2
                break;
            default: res = 0
        }
        setResult(res)
    }

    return (
        <button className="btn" onClick={Res}>{func}</button>
    )
}

export default Button