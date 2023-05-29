import { FC, memo } from 'react'
import {
    ContainerImage,
    ContainerText,
    ImageLogo,
    MainContainer,
    SpanBold,
    TextHeader,
} from './styles'

const HeaderParticulares: FC = () => {
    const logo = require('../../assets/logos/1_PNG.png')
    return (
        <MainContainer>
            <ContainerText>
                <TextHeader>
                    <SpanBold>NADA DE CURSITOS PREGRABADOS.</SpanBold>
                    {<br />} Formación 1 a 1 para Particulares.
                </TextHeader>
            </ContainerText>
        </MainContainer>
    )
}

export default memo(HeaderParticulares)
