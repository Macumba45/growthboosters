import { FC, memo, useEffect, useState } from 'react'
import {
    ContainerImage,
    ContainerText,
    ImageLogo,
    MainContainer,
    SpanBold,
    TextHeader,
} from './styles'
import { motion } from 'framer-motion'

const HeaderQuienesSomos: FC = () => {
    const logo = require('../../assets/logos/1_PNG.png')

    const titleVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.05, // retrasa el inicio de la animación medio segundo
                staggerChildren: 0.04, // retrasa el inicio de cada letra 0.1 segundos
            },
        },
    }

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 50, // desplaza cada letra hacia abajo mientras está oculta
        },
        visible: {
            opacity: 1,
            y: 0, // devuelve cada letra a su posición original
        },
    }
    return (
        <MainContainer>
            <ContainerText>
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <TextHeader>
                        <motion.span variants={letterVariants}>
                            <SpanBold>M</SpanBold>
                        </motion.span>
                        <motion.span variants={letterVariants}>
                            <SpanBold>á</SpanBold>
                        </motion.span>
                        <motion.span variants={letterVariants}>
                            <SpanBold>s</SpanBold>
                        </motion.span>
                        <motion.span variants={letterVariants}>
                            <SpanBold> </SpanBold>
                        </motion.span>
                        <motion.span variants={letterVariants}>
                            <SpanBold>S</SpanBold>
                        </motion.span>
                        <motion.span variants={letterVariants}>
                            <SpanBold>o</SpanBold>
                        </motion.span>
                        <motion.span variants={letterVariants}>
                            <SpanBold>b</SpanBold>
                        </motion.span>
                        <motion.span variants={letterVariants}>
                            <SpanBold>r</SpanBold>
                        </motion.span>
                        <motion.span variants={letterVariants}>
                            <SpanBold>e</SpanBold>
                        </motion.span>
                    </TextHeader>
                </motion.div>
            </ContainerText>
            <ContainerImage>
                <ImageLogo src={logo} />
            </ContainerImage>
        </MainContainer>
    )
}

export default memo(HeaderQuienesSomos)
