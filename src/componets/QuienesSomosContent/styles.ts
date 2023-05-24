import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100%;
    @media screen and (max-width: 600px) {
        height: 1400px;
    }
`

export const ContainerQuienes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.colors.primary};

`

export const ContainerText = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
`

export const TextHeader = styled.h1`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    line-height: 3rem;
    width: 600px;
    @media screen and (max-width: 600px) {
        width: 330px;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

export const ContainerSubText = styled.h3`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 2rem;
    line-height: 2rem;

    width: 600px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        width: 330px;
    }
`
export const ContainerSubSubText = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 1rem;
    font-weight: 200;
    margin-bottom: 2rem;
    width: 600px;
    line-height: 2rem;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        width: 330px;
    }
`

export const ContainerImage = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    width: 50%;
    @media screen and (max-width: 600px) {
        justify-content: center;
    }
`
export const ImageLogo = styled.img`
    width: 30rem;
    border-radius: 20px;
    @media screen and (max-width: 600px) {
        width: 20rem;
    }
`

export const ContainerHacemos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.colors.secondary};

`

export const ContainerTextHacemos = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
`

export const TextHeaderHacemos = styled.h1`
    text-align: right;
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    line-height: 3rem;
    width: 600px;
    @media screen and (max-width: 600px) {
        width: 330px;
        flex-direction: column;
    }
`

export const ContainerSubTextHacemos = styled.h3`
    text-align: right;

    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 2rem;
    line-height: 2rem;

    width: 600px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        width: 330px;
    }
`
export const ContainerSubSubTextHacemos = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    text-align: right;
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 1rem;
    font-weight: 200;
    margin-bottom: 2rem;
    width: 600px;
    line-height: 2rem;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        width: 330px;
    }
`

export const ContainerImageHacemos = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 50%;
    @media screen and (max-width: 600px) {
        justify-content: center;
    }
`
