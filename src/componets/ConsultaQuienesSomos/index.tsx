import { FC, memo } from 'react'
import {
    Container,
    MainContainer,
    SubTitleContainer,
    SubTitleServices,
    TitleContainer,
    TitleServices,
} from './styles'
import ButtonConsultoria from '../ButtonConsultoria'
import { Props } from './type'

const ContactoComp: FC<Props> = ({ description }) => {
    const ButtonStyles = {
        backgroundColor: '#ef9018',
        color: '#F7F7F7',
        marginTop: '5rem',
        fontSize: '1rem',
        width: '280px',
        zIndex: 9999,

        opacity: 0,
        '&:hover': {
            backgroundColor: '#FF6600',
        },
    }

    return (
        <MainContainer>
            <Container>
                <TitleContainer>
                    <TitleServices>Tu primera Consultoría</TitleServices>
                </TitleContainer>
                <SubTitleContainer>
                    <SubTitleServices>{description}</SubTitleServices>
                </SubTitleContainer>
                <ButtonConsultoria
                    style={ButtonStyles}
                    title={'Consultoría Gratuita'}
                    href="https://calendly.com/agendagrowthboosters/consultoria1a1"
                />
            </Container>
        </MainContainer>
    )
}

export default memo(ContactoComp)
