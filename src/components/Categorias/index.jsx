import styled from "styled-components"
import Card from "../Card"
import Tag from "../Tag"
import { useVideoContext } from "../../context"

const StyledSection = styled.section`
    margin: 40px 10px;
`

const StyledDiv = styled.div`
    display: flex;
    justify-content:space-between;
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