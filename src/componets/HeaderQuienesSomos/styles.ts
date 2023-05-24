import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: black;
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
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: ${({ theme }) => theme.fontSizes.mediumBig};
    text-align: center;
`

export const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImageLogo = styled.img`
    width: 30rem;
`

export const SpanBold = styled.span`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-weight: 800;
    text-decoration: underline;
`
