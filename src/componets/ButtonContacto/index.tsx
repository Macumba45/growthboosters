import { FC, memo } from 'react'
import { Button } from '@mui/material'
import { Props } from './type'
import { Link } from 'react-scroll'
import HoverMotion from '../../animations/hover'
import { motion } from 'framer-motion'

const ButtonContacto: FC<Props> = ({ title }) => {
    return (
        <HoverMotion>
            <Link to="contacto" smooth={true}>
                <motion.div
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }} // transición lenta
                >
                    <Button
                        sx={{
                            borderColor: '#FF9900',
                            color: '#FF9900',
                            marginBottom: '1rem',
                            marginRight: '1rem',
                            marginLeft: '1rem',
                            width: '225px',

                            '&:hover': {
                                borderColor: '#FF6600',
                            },
                        }}
                        variant="outlined"
                        component={motion.button}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }} // transición lenta
                    >
                        {title}
                    </Button>
                </motion.div>
            </Link>
        </HoverMotion>
    )
}

export default memo(ButtonContacto)
