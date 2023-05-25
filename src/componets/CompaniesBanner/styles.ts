import styled from 'styled-components'

export const MainContainer = styled.div`

background-color: ${({ theme }) => theme.colors.primaryLight};
height: 700px;
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
`

export const ContainerPics = styled.div`

display: flex;
justify-content: center;
align-items: center;
`

export const Container = styled.div`
display: flex;
justify-content: center;
width: 100%;


`

export const PartnerPics = styled.img`

    width: 15rem;
    margin-left: 1rem;
    margin-right: 1rem;
    background-size: cover;

    @media screen and (max-width: 600px) {
        margin-bottom: 1rem;
        width: 15rem;

        margin-top: 1rem;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    height: 310px;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
`

export const TitleServices = styled.h1`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    font-weight: 400;

    @media screen and (max-width: 600px) {
        font-size: 2rem;
        line-height: 3rem;
    }
`


