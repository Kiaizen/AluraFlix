import styled from "styled-components"

const StyledImg = styled.img`
    width:432px;
    border: 4px solid ${props=>props.$color};
    border-radius: 4px 4px 0 0;
    box-sizing:border-box;
    box-shadow:inset 0 0 17px 8px ${props=>props.$color};
`

const StyledFigcaption = styled.figcaption`
    border: 4px solid ${props=>props.$color};
    border-radius:0 0 15px 15px;
    background-color: rgba(0, 0, 0, 0.9);
    height:59px;
    margin-top: -10px;
    display:flex;
    align-items:center;
    justify-content:space-around;
`

const StyledButton = styled.button`
    background-color:transparent;
    color:rgba(255, 255, 255, 1);
    border: none;
    font-family:'Roboto';
    font-size:16px;
    display:flex;
    align-items:center;
    gap: 20px;
    img{
        height:28px;
        width:25px;
    }
`

const Card = ({color}) => {
    return(
        <figure>
            <StyledImg $color={color} src="/image 7.png" alt="Gatinha front-end" />
            <StyledFigcaption $color={color}>
                <StyledButton> <img src="/Lixeira.png" alt="Lixeira" />
                    DELETAR</StyledButton>
                <StyledButton> <img src="/Lapiz.png" alt="Lapiz" />
                    EDITAR</StyledButton>
            </StyledFigcaption>
        </figure>
    )
}

export default Card