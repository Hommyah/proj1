import React from "react";

type Props = {
    setClean: (c: any) => void;
}

const BtnByClear: React.FC<Props> = ({setClean}) => {
    return (
        <button className='clear'>Очистить список</button>
    )
}

export default BtnByClear