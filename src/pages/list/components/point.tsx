import React from "react";

type Props = {
    text: string;
    setPoint?: (pnt: string)=>void;
}

const Point: React.FC<Props> = ({text,setPoint}) => {
    const [clicked, setClicked] = React.useState(false);

    const ChangeClicked = React.useCallback(()=>{setClicked(!clicked)}, [clicked])

    return (
        <div className='point' style={ clicked? {textDecoration: "line-through"}:undefined}>
            <input type={"checkbox"} onChange={ChangeClicked}/>
            <div>{text}</div>
        </div>
    )
}

export default Point