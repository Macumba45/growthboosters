import { FC, memo } from 'react'
import {
    ContainerImage,
    ContainerQuienes,
    ContainerSubSubText,
    ContainerSubText,
    ContainerText,
    ImageLogo,
    MainContainer,
    TextHeader,
} from './styles'

const QuienesSomosContent: FC = () => {
    const logo = require('../../assets/logos/1_JPG.jpg')
    return (
        <MainContainer>
            <ContainerQuienes>
                <ContainerText>
                    <TextHeader>
                        Los integrantes del equipo somos Sellers Individuales
                        que han emprendido su propio negocio dentro de este
                        Marketplace.
                    </TextHeader>
                    <ContainerSubText>
                        Después de casi 4 años rentabilizando la plataforma nos
                        unimos para conformar un equipo único de trabajo, con
                        experiencia y sinérgico entre nuestros diferentes
                        perfiles.
                    </ContainerSubText>
                    <ContainerSubSubText>
                        Sabemos lo que es vender en primera persona, lo que es
                        tener que realizar importaciones y gestionar tu propio
                        stock y logística. El tener que diferenciarte de los
                        competidores más potentes trabajando tu producto y tu
                        branding, el posicionar rápidamente contando cada euro
                        que se invierte para sacar la máxima rentabilidad a
                        largo plazo, en resumen, sabemos lo que es vender.
                    </ContainerSubSubText>
                </ContainerText>
                <ContainerImage>
                    <ImageLogo src={logo} />
                </ContainerImage>
            </ContainerQuienes>
        </MainContainer>
    )
}

export default memo(QuienesSomosContent)
