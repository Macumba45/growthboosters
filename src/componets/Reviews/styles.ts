import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'

const blanco = require('../../assets/background/blanco.jpg')

export const MainContainer = styled.div`
    width: 100%;
    background-image: url(${blanco});
    height: 135vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 600px) {
        height: 110vh;
    }
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

export const ContainerCards = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 5rem;
`

export const SubTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 5rem;
`

export const SubSubTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
`

export const TitleServices = styled.h1`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    line-height: 5rem;
    font-weight: 400;

    @media screen and (max-width: 600px) {
        font-size: 2rem;
        line-height: 3rem;
    }
`

export const SubTitleServices = styled.h2`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    line-height: 2rem;
    font-weight: 900;

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSizes.small};
    }
`

export const SubSubTitleServices = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 300;

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSizes.smallest};
    }
`
