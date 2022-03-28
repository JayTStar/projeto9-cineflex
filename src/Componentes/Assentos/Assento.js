import { useState } from 'react';
import styled from 'styled-components';

export default function Assento({name, disponivel}){

    if(disponivel === true){
        return(
            <>
            <Cinza>{name}</Cinza>
            </>
        )
    }
    else{
        return(
            <>
            <Amarelo>{name}</Amarelo>
            </>
        )
    }
    
    
}



const Cinza = styled.p`
    width: 26px;
    height: 26px;

    margin 8px 3.5px;
    
    background-color: ${props => props.selected ? '#8DD7CF' : '#C3CFD9'};
    border: 1px solid #7B8B99;
    box-sizing: border-box;
    border-radius: 50%;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;

    color: #000000;
`

const Amarelo = styled.p`
    width: 26px;
    height: 26px;

    margin 8px 3.5px;
    
    background-color: #FBE192;
    border: 1px solid #F7C52B;
    box-sizing: border-box;
    border-radius: 50%;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;

    color: #000000;
`
