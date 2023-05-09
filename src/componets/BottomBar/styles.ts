import styled from 'styled-components'

export const MainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
    min-width: 300px;
    position: sticky;
    bottom: 0;
    z-index: 10;
    text-align: center;
`


export const SpanBold = styled.span`
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
`