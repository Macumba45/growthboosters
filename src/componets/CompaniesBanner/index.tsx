import { FC, memo, useEffect, useState } from 'react';
import HoverMotion from '../../animations/hover';
import { Image } from './type';
import {
    Container,
    ContainerPics,
    MainContainer,
    PartnerPics,
    TitleContainer,
    TitleServices,
} from './styles';
import { chunk } from 'lodash';
import Carousel from 'react-material-ui-carousel';

const CompaniesBanner: FC = () => {
    const alibaba = require('../../assets/logosCompanies/alibaba.png');
    const aliexpress = require('../../assets/logosCompanies/aliexpress.png');
    const amazon = require('../../assets/logosCompanies/amazon.png');
    const decatlhon = require('../../assets/logosCompanies/decathlon.png');
    const discount = require('../../assets/logosCompanies/discount.png');
    const leroy = require('../../assets/logosCompanies/leroy.png');
    const maison = require('../../assets/logosCompanies/maison.png');
    const miravia = require('../../assets/logosCompanies/miravia.png');
    const privalia = require('../../assets/logosCompanies/privalia.png');
    const zalando = require('../../assets/logosCompanies/zalando.png');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // inicializa el estado en función del ancho actual
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const images: Image[] = [
        {
            src: alibaba,
        },
        {
            src: aliexpress,
        },
        {
            src: amazon,
        },
        {
            src: decatlhon,
        },
        {
            src: discount,
        },
        {
            src: leroy,
        },
        {
            src: maison,
        },
        {
            src: privalia,
        },
        {
            src: zalando,
        },
        {
            src: miravia,
        },
    ];

    const imagesGrouped = chunk(images, 5); // Agrupamos los elementos en sub-arreglos de seis
    const imagesGroupedMobile = chunk(images, 1);

    return (
        <MainContainer>
            <TitleContainer>
                <TitleServices>NUESTRAS COMPAÑIAS</TitleServices>
            </TitleContainer>

            {isMobile ? (
                <Carousel
                    IndicatorIcon={null}
                    interval={5000}
                    index={2}
                    animation={'fade'}
                    swipe={false}
                    sx={{ width: '100%', marginBottom: '2rem', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0 auto', alignItems: 'center' }}

                >

                    {imagesGroupedMobile.map((item, index) => (
                        <ContainerPics>
                            <PartnerPics key={index} src={item[0].src} />
                        </ContainerPics>
                    ))}

                </Carousel>
            ) : (
                <Carousel
                    interval={5000}
                    IndicatorIcon={null}
                    index={2}
                    animation={'fade'}
                    swipe={false}
                    fullHeightHover={true}
                    sx={{ width: '100%', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0 auto' }}


                >
                    {imagesGrouped.map((item, index) => (
                        <ContainerPics>

                            {item.map((image, subIndex) => (
                                <HoverMotion key={index}>
                                    <PartnerPics key={subIndex} src={image.src} />
                                </HoverMotion>

                            ))}

                        </ContainerPics>
                    ))}
                </Carousel>

            )}
        </MainContainer >
    );
};

export default memo(CompaniesBanner);
