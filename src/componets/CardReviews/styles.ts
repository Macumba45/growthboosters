import styled from 'styled-components'
const backgroundColor = require('./../../assets/reviews/review.jpg')

export const MainContainer = styled.div``

export const Container = styled.div`
    width: 330px;
    height: 550px;
    background-image: url(${backgroundColor});
    background-size: cover;
    border-radius: 10px;
    margin-left: 1rem;
    margin-right: 1rem;
`

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
`

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
`

export const ContainerDescription = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
`

export const ImgCard = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    margin-top: 2rem;
`

export const TitleCard = styled.h1`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 700;
    text-transform: capitalize;
`

export const DescriptionCard = styled.p`
    font-family: ${({ theme }) => theme.fonts.poppins};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: ${({ theme }) => theme.fontSizes.smallest};
    font-weight: 300;
    line-height: 1.8rem;
`
