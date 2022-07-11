import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartWidget = ({ Items }) => {
    return (
    <>
        <ShoppingCartIcon />
        <span>{Items}</span>
    </>
    );
};

export default CartWidget;
