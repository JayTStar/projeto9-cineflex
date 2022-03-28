import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import styled from 'styled-components';
import Assento from './Assento';
import Footer from '../Footer';

export default function Assentos(){
    const [lista, setLista] = useState([]);
    const [dia,setDia] = useState([]);
    const [filme, setFilme] = useState([])
    const [nome,setNome] = useState("")
    const [CPF, setCPF] = useState("")
    const { idSessao } = useParams();

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        requisicao.then(resposta => {
            setLista(resposta.data.seats);
            setDia([resposta.data.day.weekday, resposta.data.name]);
            setFilme(resposta.data.movie)
        })
    })
    return(
        <>
        <Titulo>Selecione o(s) Assento(s)</Titulo>
        <Lista>
            {lista.map(elemento => {return <Assento name={elemento.name} disponivel={elemento.isAvailable}/>})}
        </Lista>
        <Legenda>
            <Op>
                <Verde></Verde>
                <Info>Selecionado</Info>
            </Op>
            <Op>
                <Cinza></Cinza>
                <Info>Disponível</Info>
            </Op>
            <Op>
                <Amarelo></Amarelo>
                <Info>Indisponível</Info>
            </Op>
        </Legenda>
        <Form>
            <Dados>Nome do Comprador</Dados>
            <Input placeholder="Digite seu nome..." onChange={event => setNome(event.target.value)}/>
            <Dados>CPF do Comprador</Dados>
            <Input placeholder="Digite seu CPF..." onChange={event => setCPF(event.target.value)}/>
        </Form>
        <Botao>Reservar assento(s)</Botao>
        <Footer poster={filme.posterURL} titulo={filme.title} horario={dia}/>
        </>
    )
}

const Titulo = styled.p`
    width: 374px;
    height: 110px;

    margin-top: 67px;

    font-family: 'Roboto';
    font-style: normal;
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

    padding:0 24px;
    

    box-sizing: border-box;

    display: flex;
    alingn-itens: center;
    justify-content: center;

    flex-wrap: wrap;
`

const Dados = styled.p`
    width: 327px;
    height: 25px;

    margin-top: 7px;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #293845;
`

const Form = styled.ul`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    margin-top: 20px;
    padding:0;
`

const Input = styled.input`
    width: 327px;
    height: 51px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 3px;
`

const Legenda = styled.ul`
    width: 100%;
    height: auto;

    display: flex;
    alingn-itens: center;
    justify-content: space-around;
    box-sizing: border-box;

    margin-top:16px;
    padding:0;
`

const Op = styled.div`
    width: auto;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Info = styled.p`
    width: 91px;
    height: 28px;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.013em;

    color: #4E5A65;
`

const Verde = styled.div`
    width: 25px;
    height: 25px;

    background-color: #8DD7CF;
    border: 1px solid #1AAE9E;
    box-sizing: border-box;
    border-radius: 17px;
`

const Cinza = styled.div`
    width: 25px;
    height: 25px;

    background-color: #C3CFD9;
    border: 1px solid #7B8B99;
    box-sizing: border-box;
    border-radius: 17px;
`

const Amarelo = styled.div`
    width: 25px;
    height: 25px;

    background-color: #FBE192;
    border: 1px solid #F7C52B;
    box-sizing: border-box;
    border-radius: 17px;
`

const Botao = styled.div`
    width: 225px;
    height: 42px;

    background: #E8833A;
    border-radius: 3px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;

    margin 20px 72px;
    color: #FFFFFF;
`