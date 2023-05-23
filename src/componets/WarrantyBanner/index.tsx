import { FC, memo } from 'react'
import HoverMotion from '../../animations/hover'
import { Image } from './type'
import {
    Container,
    ContainerPics,
    MainContainer,
    PartnerPics,
    SpanBold,
    SubSubSubTitleContainer,
    SubSubSubTitleServices,
    SubSubTitleContainer,
    SubSubTitleServices,
    SubTitleContainer,
    SubTitleServices,
    TitleContainer,
    TitleServices,
} from './styles'

const WarrantyBanner: FC = () => {
    return (
        <MainContainer>
            <TitleContainer>
                <TitleServices>Garantía GrowthBooster</TitleServices>
            </TitleContainer>
            <SubTitleContainer>
                <SubTitleServices>
                    <SpanBold>Somos nosotros,</SpanBold> sin intermediarios ni
                    colaboradores externos, quienes te ayudarán con tu proyecto.
                    Personalmente nos encargamos de brindarte asistencia y
                    orientación. {<br />} <SpanBold>No habrá terceros involucrados.</SpanBold>
                </SubTitleServices>
            </SubTitleContainer>
            <SubSubTitleContainer>
                <SubSubTitleServices>
                    Estamos tan seguros de la calidad y eficacia de nuestro
                    servicio que si en el primer mes no ves resultados.
                    <SpanBold>
                        {<br />} EL SIGUIENTE TRABAJAMOS GRATIS PARA TÍ.{<br />} SÍ GRATIS. No pagas.
                    </SpanBold>
                </SubSubTitleServices>
            </SubSubTitleContainer>
            <SubSubSubTitleContainer>
                <SubSubSubTitleServices>
                    Solo trabajamos con personas a las que realmente podemos ayudar, nada fuera de nuestras posibilidades.
                </SubSubSubTitleServices>
            </SubSubSubTitleContainer>
            <Container></Container>
        </MainContainer>
    )
}

export default memo(WarrantyBanner)
