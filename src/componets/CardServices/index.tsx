import { FC, memo } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, CardActions } from '@mui/material'
import { MainContainer } from './styles'
import { Props } from './type'
import ButtonConsultoria from '../ButtonConsultoria'

const CardServices: FC<Props> = ({ title, img, description }) => {
    return (
        <MainContainer>
            <Card
                sx={{
                    width: 360,
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
                    <CardMedia component="img" height="130" image={img} />
                    <CardContent>
                        <Typography
                            sx={{ height: '4rem', fontFamily: 'montserrat' }}
                            gutterBottom
                            variant="h5"
                            component="div"
                        >
                            {title}
                        </Typography>
                        <Typography
                            sx={{ height: '10rem', fontFamily: 'montserrat' }}
                            variant="body2"
                            color="text.secondary"
                        >
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ height: '4rem', display: 'flex', justifyContent: 'center' }}>
                    <ButtonConsultoria title={'Consultoría gratuita'} />
                </CardActions>
            </Card>
        </MainContainer>
    )
}

export default memo(CardServices)
