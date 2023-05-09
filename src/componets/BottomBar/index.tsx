import { FC, memo, useEffect, useState } from 'react'
import ButtonConsultoria from '../ButtonConsultoria'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { MainContainer } from './styles'

const BottomBar: FC = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset
            if (currentScrollY > 1900) {
                // 200 es la altura a la que quieres que aparezca el componente
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {isVisible && (
                <MainContainer>
                    <ButtonConsultoria
                        title={'Agendar consultoría Gratis'}
                        icon={
                            <CalendarMonthIcon
                                sx={{ color: 'white', marginLeft: '1rem' }}
                            />
                        }
                    />
                </MainContainer>
            )}
        </>
    )
}

export default memo(BottomBar)
