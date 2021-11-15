import React from "react";

type Props = {
    text: string;
    setPoint: (pnt: string)=>void;
}

const Point: React.FC<Props> = ({text,setPoint}) => {

    setPoint(text)

    return (
        <div className='point'>
            <input type={"checkbox"}/>
            <div>{text}</div>
        </div>
    )
}

export default Point