import styled from "styled-components";

export const MainContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;    
    background-color: ${({ theme }) => theme.colors.primaryLight};
    display: flex;
    margin-right: 1rem;
    justify-content: center;
    align-items: center;


  
`

export const Form = styled.form`

width: 400px;
display: flex;
justify-content: center;


`


export const SentMessage = styled.p`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.smallest};
`;


export const TitleContainer = styled.div`
    display: flex;
    height: 110px;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
`

export const SubTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;

    `


export const TitleServices = styled.h1`
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.secondary};
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
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    line-height: 2rem;
    font-weight: 900;

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSizes.small};
    }
`


export const Container = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 5rem;

`