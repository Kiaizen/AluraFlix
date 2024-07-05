import styled from "styled-components"
import Card from "../Card"
import Tag from "../Tag"

const StyledSection = styled.section`
    margin: 40px 10px;
`

const StyledDiv = styled.div`
    display: flex;
    justify-content:space-between;
`

const Categorias = () => {
    return(
        <StyledSection>
            <Tag color={'rgba(107, 209, 255, 1)'} width={'432px'} fs={'32px'}>FRONT END</Tag>
                <StyledDiv>
                    <Card color={'rgba(107, 209, 255, 1)'}></Card>
                    <Card color={'rgba(107, 209, 255, 1)'}></Card>
                    <Card color={'rgba(107, 209, 255, 1)'}></Card>

                </StyledDiv>
        </StyledSection>
    )
}

export default Categorias