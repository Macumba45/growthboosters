import { FC, memo, useEffect, useState } from 'react'
import { Fab, Tooltip, useMediaQuery } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

const FloatHomeButton: FC = () => {
    const [showButton, setShowButton] = useState<boolean>(false)
    const isSmallScreen = useMediaQuery('(max-width:600px)')

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        if (window.pageYOffset > 200) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }

    const CustomTooltip = ({ title, children }: any) => {
        return (
            <Tooltip title={title} placement="top">
                {children}
            </Tooltip>
        )
    }

    return (
        <>
            {showButton && (
                <CustomTooltip title="Agendar cita">
                    <Fab
                        href="https://calendly.com/agendagrowthboosters"
                        size={isSmallScreen ? 'medium' : 'large'}
                        sx={{
                            position: 'fixed',
                            bottom: '2rem',
                            right: 0,
                            marginRight: '2rem',
                            backgroundColor: '#ef9018',
                            '&:hover': {
                                backgroundColor: '#7a4607', // Cambiar color del hover
                            },
                        }}
                        color="primary"
                        aria-label="add"
                    >
                        <CalendarMonthIcon />
                    </Fab>
                </CustomTooltip>
            )}
        </>
    )
}

export default memo(FloatHomeButton)
