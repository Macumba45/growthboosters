import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    margin-top: 5rem;
    flex-direction: column;
    align-items: center;
`

export const FullWidthCarousel = styled(Carousel)`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    .carousel-root {
        width: 100%;
        margin: 0;
        padding: 0;
    }
`

export const ContainerCards = styled.div`
    display: flex;
    width: 350px;
    margin-top: 2rem;
    flex-wrap: wrap;
    justify-content: center;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
`

export const SubTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
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
    font-family: ${({ theme }) => theme.fonts.montserrat};
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
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    line-height: 2rem;
    font-weight: 900;

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSizes.small};
    }
`

export const SubSubTitleServices = styled.p`
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 300;

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSizes.smallest};
    }
`
