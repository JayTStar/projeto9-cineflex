import { Link } from "react-router-dom"
import styled from 'styled-components';

export default function Filme({id, title, img, sinopse, lancamento}){
    return (
        
        <Link params={id} to={`/filme/${id}`}><Poster className="Capa" src={img} alt="Capa do Filme"/></Link>
    )
}

const Poster = styled.img`
    width: 129px;
    height: 193px;

    margin: 11px 25px; 

    background-color:#FFFFFF;
    background-size: 145px 209px;

    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
`