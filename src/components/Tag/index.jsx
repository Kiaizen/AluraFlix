import styled from "styled-components"

const Tags = styled.h1`
    height: 70px;
    background-color: ${props => props.$color};
    color:rgba(245, 245, 245, 1);
    width: ${props=>props.$width};
    border-radius: 15px;
    display:flex;
    align-items:center;
    justify-content: center;
    font-family: 'Roboto';
    font-size: ${props=> props.$fs};
    font-weight:900;
    margin-bottom: 40px;
`

const Tag = ({children, color, width, fs}) => {
    return(
        <Tags $color={color} $width={width} $fs={fs}>
            {children}
        </Tags>
    )
}

export default Tag