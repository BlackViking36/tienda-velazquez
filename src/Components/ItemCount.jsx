import React, { useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ItemCount({ initial, max, onAdd }) {

    const [count, setCount] = useState();

    const sumar = () => {
        if (count < max) {
            setCount(count + 1);
        } else {
        console.log("no puedes agregar mas productos");
        }
    };

    const restar = () => {
        count > initial
        ? setCount(count - 1)
        : console.log("no puedes quitar mas productos");
    };

    const reset = () => {
        setCount(initial);
    }

    return (
        <>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h2>{count}</h2>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <AddIcon onClick={sumar} />
            <RemoveIcon onClick={restar} />
            <ClearIcon onClick={reset} />
            <AddShoppingCartIcon onClick={() => {onAdd(count); reset()}} />
        </div>
        </>
    );
}
