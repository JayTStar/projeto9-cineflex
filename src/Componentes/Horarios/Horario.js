import { Link } from "react-router-dom"
import styled from 'styled-components';

export default function Horario({idSessao, dia, data, horarios}){
    const hora = horarios.map(elemento => {return elemento})
    return(
        <Sessao>
            <Data>{dia} - {data}</Data>
            <Horas>{hora.map(elemento => {return <Link params={idSessao} to={`/assentos/${idSessao}`}><Hora>{elemento.name}</Hora></Link>})}</Horas> 
        </Sessao>
    )
}

const Sessao = styled.ul`
    box-sizing: border-box;
    padding: 0 24px;
`

const Data = styled.p`
    width: 241px;
    height: 35px;
    left: 24px;
    top: 170px;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;

    color: #293845;
`

const Horas = styled.ul`
    width: 100%;
    height: auto;

    display: flex;

    padding: 0;
    margin: 23px 0;
`

const Hora = styled.p`
    width: 83px;
    height: 43px;

    margin-right: 10px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;

    color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #E8833A;
    border-radius: 3px;
`