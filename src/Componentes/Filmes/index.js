import { useState, useEffect } from 'react';
import axios from "axios";
import Filme from "./Filme";
import styled from 'styled-components';

export default function Filmes(){
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const requisicao = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');

        requisicao.then(resposta => {
            setLista(resposta.data)
        })

    }, []);
    
    return(
        <>
            <Titulo>Selecione o Filme</Titulo>
            <Lista>
                {lista.map(elemento => {return <Filme id={elemento.id} title={elemento.title} img={elemento.posterURL} sinopse={elemento.overview} lancamento={elemento.releaseDate}/>})}
            </Lista>
        </>
    )
}

const Titulo = styled.p`
    width: 374px;
    height: 110px;

    margin-top: 67px;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;

    color: #293845;
`

const Lista = styled.ul`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
`