import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100%;
    height: 1000px;
`

export const ContainerQuienes = styled.div`
    display: flex;
    margin-top: 5rem;
    justify-content: center;
    flex-wrap: wrap;
`

export const ContainerText = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: column;
    align-items: center;
`

export const TextHeader = styled.h1`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    line-height: 3rem;
    width: 600px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const ContainerSubText = styled.h3`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 2rem;
    line-height: 2rem;

    width: 600px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`
export const ContainerSubSubText = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1rem;
    font-weight: 200;
    margin-bottom: 2rem;
    width: 600px;
    line-height: 2rem;


    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const ContainerImage = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;

    width: 50%;
`
export const ImageLogo = styled.img`
    width: 30rem;
    border-radius: 20px;
`

export const ContainerHacemos = styled.div``
