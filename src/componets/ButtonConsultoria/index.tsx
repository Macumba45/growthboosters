import { FC, memo } from 'react'
import { Button } from '@mui/material'
import { Props } from './type'
import { motion } from 'framer-motion'
import HoverMotion from '../../animations/hover'
import { MainContainer } from './style'

const ButtonConsulta: FC<Props> = ({ title, icon, bgColor, marginBottom }) => {
    return (
        <HoverMotion>
            <MainContainer>
                <motion.div
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }} // transición lenta

                >
                    <Button
                        target="blank"
                        sx={{
                            backgroundColor: bgColor || '#ef9018',
                            color: '#F7F7F7',
                            marginBottom: marginBottom || '1rem',
                            fontSize: '1rem',
                            opacity: 0,
                            '&:hover': {
                                backgroundColor: '#FF6600',
                            },
                        }}
                        href="https://calendly.com/agendagrowthboosters"
                        variant="contained"
                        component={motion.a}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }} // transición lenta
                    >
                        {title}
                        {icon}
                    </Button>
                </motion.div>
            </MainContainer>
        </HoverMotion>
    )
}

export default memo(ButtonConsulta)
