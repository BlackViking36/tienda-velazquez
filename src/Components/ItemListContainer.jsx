import React from 'react';
import '@mui/material/'

const textoSaludo = {
    letterSpacing: '10',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'roboto'
};

const ItemListContainer = ({ greetings }) => {
    return (
        <h1 style={textoSaludo}>{greetings}</h1>
    )
};

export default ItemListContainer;