import { FC, memo } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, CardActions } from '@mui/material'
import ButtonConsultoria from '../ButtonConsultoria'
import { Props } from './type'
import { MainContainer } from './styles'
import HoverMotion from '../../animations/hover'

const CardServices: FC<Props> = ({ title, img, description }) => {

    let buttonHref = 'https://calendly.com/agendagrowthboosters'; // Enlace por defecto

    if (title === 'Sesiones de Consultoría') {
        buttonHref = 'https://calendly.com/agendagrowthboosters/consultoria1a1'; // Enlace específico para "Sesiones de Consultoría"
    }

    return (
        <HoverMotion>
            <MainContainer>
                <Card
                    sx={{
                        width: 320,
                        marginBottom: '1rem',
                        marginLeft: '1rem',
                        marginRight: '1rem',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                    }}
                >
                    <CardActionArea>
                        <CardMedia component="img" height="180" image={img} />
                        <CardContent>
                            <Typography
                                sx={{ height: '4rem', fontFamily: 'poppins' }}
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {title}
                            </Typography>
                            <Typography
                                sx={{ height: '12rem', fontFamily: 'poppins' }}
                                variant="body2"
                                color="text.secondary"
                            >
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions
                        sx={{
                            height: '3rem',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    ></CardActions>
                    <ButtonConsultoria title={'Consultoría gratuita'} href={buttonHref} />
                </Card>
            </MainContainer>
        </HoverMotion>
    )
}

export default memo(CardServices)
