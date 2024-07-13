import styled from "styled-components"
import Card from "../Card"
import Tag from "../Tag"
import { useVideoContext } from "../../context"

const StyledSection = styled.section`
    margin: 40px 10px;
    @media (max-width:1280px){
        max-width:968px;
        margin-inline:auto;
        display: flex;
        flex-direction:column;
        h1{
            align-self:center;
        }
    }
    @media(max-width:768px){
        h1{
            width:286px;
        }
    }
`

const StyledDiv = styled.div`
    display: flex;
    justify-content:space-between;
    gap:20px;
    overflow-x:scroll;
    margin-inline:20px;
    @media (max-width:768px) {
        figure{
            width:370px;
        }
    }
`

const Categorias = ({color, title}) => {
    const {videos} = useVideoContext();
    const videosFiltrados = videos.filter(video => video.select === title)

    return(
        <StyledSection>
            <Tag color={color} width={'432px'} fs={'32px'}>{title}</Tag>
                <StyledDiv>
                    {videosFiltrados.map((video) => (<Card key={video.id} video={video} color={color}></Card>))}
                </StyledDiv>
        </StyledSection>
    )
}

export default Categorias