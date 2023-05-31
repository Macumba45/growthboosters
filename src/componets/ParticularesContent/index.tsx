import { FC, memo } from 'react'
import ConsultaQuienesSomos from '../ConsultaQuienesSomos'
import {
    ContainerImage,
    ContainerParticulares,
    ContainerText,
    ImageLogo,
    MainContainer,
    SpanBold,
    SpanBold2,
    SubTextHeader,
    SubTextParticulares,
    TextContainerParticulares,
    TextHeader,
    TextHeaderParticulares,
    TextParticulares,
    TextTitleParticulares,
} from './styles'

const logo = require('../../assets/logos/1_JPG.jpg')

const ParticularesContent: FC = () => {
    return (
        <MainContainer>
            <ContainerText>
                <TextHeader>Crea e impulsa tu negocio.</TextHeader>
            </ContainerText>
            <ContainerImage>
                <SubTextHeader>
                    Aprovecha las oportunidades en <SpanBold>Amazon,</SpanBold>{' '}
                    el gigante del comercio global.
                </SubTextHeader>
                <ImageLogo src={logo} />
            </ContainerImage>
            <TextContainerParticulares>
                <TextHeaderParticulares>
                    Un seguimiento personal de 3 meses de duración donde te acompañamos a facturar tus primeros miles de euros dentro de <SpanBold2>Amazon.</SpanBold2>
                </TextHeaderParticulares>
            </TextContainerParticulares>
            <ContainerParticulares>
                <TextTitleParticulares>Particulares</TextTitleParticulares>
                <TextParticulares>
                    Enfocados en brindar formación personalizada, nos dedicamos
                    a capacitar a particulares interesados en crear su negocio a
                    través de Amazon. Mediante sesiones en vivo, clases
                    intensivas y soporte 24h. Nuestro objetivo es formar a
                    nuevos sellers con las herramientas necesarias para tener
                    éxito en esta plataforma.
                </TextParticulares>
                <SubTextParticulares>
                    Nuestra misión es ayudar a emprendedores en el desarrollo de
                    habilidades clave para crear un negocio rentable dentro de
                    Amazon.
                </SubTextParticulares>
            </ContainerParticulares>
            <ConsultaQuienesSomos
                description="¿Quieres crear tu propio negocio? Da el primer paso, ES GRATIS
                            Asesoría Gratuita con el equipo GrowthBoosters donde analizaremos su caso y le
                            ayudaremos de manera personalizada."
            />
        </MainContainer>
    )
}

export default memo(ParticularesContent)
