import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import Horario from './Horario';
import styled from 'styled-components';

export default function Horarios(){
    const [horarios, setHorarios] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`);

        requisicao.then(resposta => {
            setHorarios(resposta.data.days);
        })
    })

    return(
        <>
            <Titulo>Selecione o Horário</Titulo>
            <Lista>{horarios.map(elemento =>{return <Horario id={elemento.id} dia={elemento.weekday} data={elemento.date} horarios={elemento.showtimes}/>})}</Lista>
        </>
    );
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
    heigth: auto;

    padding: 0;
`