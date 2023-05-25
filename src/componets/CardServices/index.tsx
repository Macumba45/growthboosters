import { FC, memo } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActions } from '@mui/material'
import ButtonConsultoria from '../ButtonConsultoria'
import { Props } from './type'
import { MainContainer } from './styles'
import HoverMotion from '../../animations/hover'

const CardServices: FC<Props> = ({ title, img, description }) => {
    let buttonHref = 'https://calendly.com/agendagrowthboosters' // Enlace por defecto

    if (title === 'Sesiones de Consultoría') {
        buttonHref = 'https://calendly.com/agendagrowthboosters/consultoria1a1' // Enlace específico para "Sesiones de Consultoría"
    }

    return (
        <HoverMotion>
            <MainContainer>
                <Card
                    style={{
                        width: 320,
                        marginBottom: '1rem',
                        marginLeft: '1rem',
                        marginRight: '1rem',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <div>
                        <CardMedia component="img" height="180" image={img} />
                        <CardContent>
                            <Typography
                                style={{
                                    height: '4rem',
                                    fontFamily: 'poppins',
                                }}
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {title}
                            </Typography>
                            <Typography
                                style={{
                                    height: '15rem',
                                    fontFamily: 'poppins',
                                }}
                                variant="body2"
                                color="text.secondary"
                            >
                                {description}
                            </Typography>
                        </CardContent>
                    </div>
                    <CardActions
                        style={{
                            height: '3rem',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    ></CardActions>
                    <ButtonConsultoria
                        title={'Consultoría gratuita'}
                        href={buttonHref}
                    />
                </Card>
            </MainContainer>
        </HoverMotion>
    )
}

export default memo(CardServices)
