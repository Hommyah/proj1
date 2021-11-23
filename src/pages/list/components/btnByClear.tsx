import React from "react";

type Props = {
    setClean: (c: any) => void;
}

const BtnByClear: React.FC<Props> = ({setClean}) => {

    const x = () => {

    }

    return (
        <button className='btn'>Очистить список</button>
    )
}

export default BtnByClear