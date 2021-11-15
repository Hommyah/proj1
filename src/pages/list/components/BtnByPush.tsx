import React from "react";

type Props = {
    setPush: (p: string)=>void;
}

const BtnByPush: React.FC<Props> = ({setPush}) => {
    return (
        <button>Добавить пункт</button>
    )
}

export default BtnByPush