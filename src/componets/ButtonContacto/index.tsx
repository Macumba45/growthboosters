import { FC, memo } from 'react'
import { Link } from 'react-scroll'
import { Props } from './type'
import HoverMotion from '../../animations/hover'
import { motion } from 'framer-motion'
import { Button } from '@mui/material'

const ButtonContacto: FC<Props> = ({ title }) => {
    const ButtonStyles = {
        borderColor: '#FF9900',
        color: '#FF9900',
        marginBottom: '1rem',
        marginRight: '1rem',
        marginLeft: '1rem',
        width: '280px',

        '&:hover': {
            borderColor: '#FF6600',
        },
    }

    return (
        <HoverMotion>
            <Link to="contacto" smooth={true}>
                <motion.div
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.4,
                        ease: [0.43, 0.13, 0.23, 0.96],
                    }} // transición lenta
                >
                    <Button
                        style={ButtonStyles}
                        variant="outlined"
                        component={motion.button}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: [0.43, 0.13, 0.23, 0.96],
                        }} // transición lenta
                    >
                        {title}
                    </Button>
                </motion.div>
            </Link>
        </HoverMotion>
    )
}

export default memo(ButtonContacto)
