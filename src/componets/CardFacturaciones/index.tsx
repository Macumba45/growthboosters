import { FC, memo } from 'react'
import HoverMotion from '../../animations/hover'
import { chunk } from 'lodash'
import {
    ContainerPictures,
    DivContainer,
    FacturacionesPictures,
    FullWidthCarousel,
    MainContainer,
} from './styles'

const fac1 = require('../../assets/facturacion/fac1.png')
const fac2 = require('../../assets/facturacion/fac2.png')
const fac3 = require('../../assets/facturacion/fac3.png')
const fac4 = require('../../assets/facturacion/fac4.png')

interface Image {
    src: string
}

const CardFacturaciones: FC = () => {
    const images: Image[] = [
        {
            src: fac1,
        },
        {
            src: fac2,
        },
        {
            src: fac3,
        },
        {
            src: fac4,
        },
    ]

    const imagesGroupedMobile = chunk(images, 1)

    return (
        <MainContainer>
            <HoverMotion>
                <ContainerPictures>
                    <FullWidthCarousel
                        navButtonsAlwaysInvisible={true}
                        interval={10000}
                    >
                        {imagesGroupedMobile.map((group, index) => (
                            <DivContainer key={index}>
                                {group.map((item, subindex) => (
                                    <FacturacionesPictures
                                        key={subindex}
                                        src={item.src}
                                    />
                                ))}
                            </DivContainer>
                        ))}
                    </FullWidthCarousel>
                </ContainerPictures>
            </HoverMotion>
        </MainContainer>
    )
}

export default memo(CardFacturaciones)
