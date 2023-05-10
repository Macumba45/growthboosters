import { FC, memo, useEffect, useState } from 'react'
import RateReviewIcon from '@mui/icons-material/RateReview'
import CardReviews from '../CardReviews'
import { chunk } from 'lodash'

import {
    MainContainer,
    TitleContainer,
    TitleServices,
    SubTitleServices,
    SubTitleContainer,
    ContainerCards,
    FullWidthCarousel,
    DivContainer,
} from './styles'

const ReviewsComp: FC = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        handleResize() // inicializa el estado en función del ancho actual
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    const images = [
        {
            description:
                'Mucho valor. Revisamos listings, fotografías, posibles productos, PPC. En abril/mayo lanzaré tres nuevos productos y, sin duda alguna, haré seguimiento con ellos. Claros, concisos y sin prisa. Atienden, no despachan. La verdad, me sentí como si los tres trabajáramos en el mismo equipo desde hace tiempo.',
            title: 'Alejandro Fernández',
        },
        {
            description:
                'He estado trabajando con ellos para la gestión de mi cuenta en Amazon durante los últimos dos meses y estoy muy contento con los resultados. Desde el principio me proporcionaron una asesoría muy completa. Han sido muy profesionales y siempre están dispuestos a ayudar. Hemos logrado un aumento en las ventas en nuestro canal de Amazon.            ',
            title: 'Ramón Vilches',
        },
        {
            description:
                'Cuatro cambios que me recomendaron y a partir de ayer esto sube como la espuma. Si alguien necesita una asesoría clara, directa y funcional, no dudéis en contar con ellos',
            title: 'Sergio Cari',
        },
        {
            description:
                'Cuatro cambios que me recomendaron y a partir de ayer esto sube como la espuma. Si alguien necesita una asesoría clara, directa y funcional, no dudéis en contar con ellos',
            title: 'Sergio 3',
        },
        {
            description:
                'Cuatro cambios que me recomendaron y a partir de ayer esto sube como la espuma. Si alguien necesita una asesoría clara, directa y funcional, no dudéis en contar con ellos',
            title: 'Sergio 4',
        },
        {
            description:
                'Cuatro cambios que me recomendaron y a partir de ayer esto sube como la espuma. Si alguien necesita una asesoría clara, directa y funcional, no dudéis en contar con ellos',
            title: 'Sergio 5',
        },
    ]

    const imagesGrouped = chunk(images, 3) // Agrupamos los elementos en sub-arreglos de tres
    const imagesGroupedMobile = chunk(images, 1)

    return (
        <MainContainer>
            <TitleContainer>
                <TitleServices>TESTIMONIOS</TitleServices>
            </TitleContainer>
            <SubTitleContainer>
                <SubTitleServices>
                    ¿Qué dicen nuestros clientes?
                </SubTitleServices>
            </SubTitleContainer>
            <ContainerCards>
                {isMobile ? (
                    <FullWidthCarousel interval={5000}>
                        {imagesGroupedMobile.map((group, index) => (
                            <DivContainer
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                                key={index}
                            >
                                {group.map((item, subIndex) => (
                                    <CardReviews
                                        key={subIndex}
                                        icon={
                                            <RateReviewIcon
                                                sx={{ fontSize: '3rem' }}
                                            />
                                        }
                                        title={item.title}
                                        description={item.description}
                                    />
                                ))}
                            </DivContainer>
                        ))}
                    </FullWidthCarousel>
                ) : (
                    <FullWidthCarousel interval={5000}>
                        {imagesGrouped.map((group, index) => (
                            <DivContainer
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                                key={index}
                            >
                                {group.map((item, subIndex) => (
                                    <CardReviews
                                        key={subIndex}
                                        icon={
                                            <RateReviewIcon
                                                sx={{ fontSize: '3rem' }}
                                            />
                                        }
                                        title={item.title}
                                        description={item.description}
                                    />
                                ))}
                            </DivContainer>
                        ))}
                    </FullWidthCarousel>
                )}
            </ContainerCards>
        </MainContainer>
    )
}

export default memo(ReviewsComp)
