import Carousel from 'react-material-ui-carousel'
import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const ContainerPictures = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    margin-left: 1rem;
    width: 500px;
    height: auto;
`

export const FacturacionesPictures = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 10px;
`
export const FullWidthCarousel = styled(Carousel)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;

    .carousel-root {
        width: 100%;
        margin: 0;
        padding: 0;
    }
`

export const DivContainer = styled.div`
    display: flex;
    justify-content: center;
`
