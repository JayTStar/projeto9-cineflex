import styled from 'styled-components';

export default function Header(){
    return(
        <Topo>
            CINEFLEX
        </Topo>
    )
}

const Topo = styled.header`
    width: 100%;
    height: 67px;

    background: #C3CFD9;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #E8833A;

    position: fixed;
    left: 0;
    top: 0;
`