import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 100%;
    height: 100vh;
`

export const ContainerText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
`

export const TextHeader = styled.h1`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.mediumBig};
    text-align: center;
    @media screen and (max-width: 600px) {
        font-size: 3rem;
    }
`

export const ContainerImage = styled.div``

export const ImageLogo = styled.img`
    width: 40rem;
    @media screen and (max-width: 600px) {
        width: 20rem;
    }
`

export const SpanBold = styled.span`
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 4rem;
    line-height: 8rem;
    color: ${({ theme }) => theme.colors.primaryLight};
    font-weight: 800;
    @media screen and (max-width: 600px) {
        font-size: 2.5rem;
        line-height: 5rem;
    }
`
