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

const face1 = require('../../assets/faces/1.PNG')
const face2 = require('../../assets/faces/2.PNG')
const face3 = require('../../assets/faces/3.PNG')
const face4 = require('../../assets/faces/4.PNG')

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
            icon: face1,
        },
        {
            description:
                'He estado trabajando con ellos para la gestión de mi cuenta en Amazon durante los últimos dos meses y estoy muy contento con los resultados. Desde el principio me proporcionaron una asesoría muy completa. Han sido muy profesionales y siempre están dispuestos a ayudar. Hemos logrado un aumento en las ventas en nuestro canal de Amazon.            ',
            title: 'Ramón Vilches',
            icon: face2,
        },
        {
            description:
                'Cuatro cambios que me recomendaron y a partir de ayer esto sube como la espuma. Si alguien necesita una asesoría clara, directa y funcional, no dudéis en contar con ellos',
            title: 'Sergio Cari',
            icon: face3,
        },
        {
            description:
                'Somos una empresa familiar que la verdad teníamos poca idea del mundo online. Trabajando mano a mano con Antonio y con su equipo hemos conseguido llevar una empresa tradicional al mundo online',
            title: 'Andrés Zamorano',
            icon: face4,
        },
        {
            description:
                'Yo venía de una formación donde supuestamente nos iban a enseñar a vender en Amazon. Después de una consultoria con el qeuipo de GrowthBoosters me di cuenta de que todo lo que me habían enseñado no valia absolutamente para nada. Empezamos a trabajar y consegui mis primeros 1000€ en 4 días',
            title: 'Javier Sánchez',
            icon: face3,
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
                    <FullWidthCarousel
                        navButtonsAlwaysInvisible={true}
                        interval={8000}
                    >
                        {imagesGroupedMobile.map((group, index) => (
                            <DivContainer key={index}>
                                {group.map((item, subIndex) => (
                                    <CardReviews
                                        key={subIndex}
                                        icon={item.icon}
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
                                        icon={item.icon}
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
