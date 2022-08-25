import styled, { keyframes } from "styled-components"
import { colors } from '../../utils/colors'

function Loader() {
    return (
        <LoaderWrapper>
            <Dote/>
            <Dote delay="400ms"/>
            <Dote delay="600ms"/>
        </LoaderWrapper>
    )
}

const LoaderWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 200px;
width: 100%;
`
const DotesFade = keyframes`
from{
    transform: scale(0);
    background-color: transparent;
}
to{
    transform: scale(1);
    background-color: ${colors.interactive};
}
`

const Dote = styled.div.attrs(props => ({
    delay: props.delay
}))`
width: 20px;
height: 20px;
background-color: transparent;
border-radius: 50%;
margin-right: 5px;
transform: scale(0);
animation: ${DotesFade} 700ms linear ${props => props.delay} infinite alternate;
`

export default Loader