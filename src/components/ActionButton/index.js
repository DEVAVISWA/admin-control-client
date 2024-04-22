import React from 'react'
import { Button } from '@mui/material';


export function ActionButton(props) {

    const {children, onClick } = props;

    return (
        <Button
            style={{padding: '0px',
            paddingTop: '0px',
            paddingBottom: '0px',
            backgroundColor: '#f07f7f',}}
            onClick={onClick}>
            {children}
        </Button>
    )
}