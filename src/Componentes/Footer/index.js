import styled from 'styled-components';

export default function Footer({poster, titulo, horario}){
    if(horario !== undefined){
        return(
            <Rodape>
                <Poster src={poster} alt='capa do filme'/>
                <Info>
                    <p>{titulo}</p>
                    <p>{horario[0]} - {horario[1]}</p>
                </Info>
            </Rodape>
        )
    }
    else{
        return(
            <Rodape>
                <Poster src={poster} alt='capa do filme'/>
                <p>{titulo}</p>
            </Rodape>
        )
    }
}

const Rodape = styled.footer`
    width: 100%;
    height: 117px;

    background-color: #DFE6ED;
    border: 1px solid #9EADBA;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;

    color: #293845;

    position: fixed;
    left: 0;
    bottom: 0;
`

const Poster = styled.img`
    width: 48px;
    height: 72px;
    
    margin: 14px 10px;
`

const Info = styled.ul`
display: flex;
flex-direction: column;

`