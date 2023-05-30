import { FC, memo } from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CardWork from '../CardWork'
import ButtonConsultoria from '../ButtonConsultoria'
import {
    Container,
    ContainerCards,
    Img,
    MainContainer,
    SubSubTitleContainer,
    SubSubTitleServices,
    SubTitleContainer,
    SubTitleServices,
    TitleContainer,
    TitleServices,
} from './styles'


const fabrica = require('../../assets/icons/fabrica.png')
const manos = require('../../assets/icons/manos.png')
const ojos = require('../../assets/icons/ojos.png')


const WorkWithUs: FC = () => {
    return (
        <MainContainer>
            <Container>
                <TitleContainer>
                    <TitleServices>
                        ¿POR QUÉ TRABAJAR CON NOSOTROS?
                    </TitleServices>
                </TitleContainer>
                <SubTitleContainer>
                    <SubTitleServices>
                        Growtboosters, mejora continua
                    </SubTitleServices>
                </SubTitleContainer>
                <SubSubTitleContainer>
                    <SubSubTitleServices>
                        Nuestra metodología y filosofía
                    </SubSubTitleServices>
                </SubSubTitleContainer>
                <ContainerCards>
                    <CardWork
                        icon={
                            <Img src={manos} />
                        }
                        title={'COMPROMISO'}
                        description={
                            'Buscamos una relación óptima con la que las dos partes podamos GANAR-GANAR. Con este modelo de negocio contaremos con unos intereses alineados creando así una sinergia perfecta.'
                        }
                    />
                    <CardWork
                        icon={<Img src={fabrica} />}
                        title={'CRECIMIENTO'}
                        description={
                            'Análisis constante del mercado con el fin de descubrir nuevas tendencias de productos con alta potencial de ventas para conseguir el escalado de su negocio.'
                        }
                    />
                    <CardWork
                        icon={<Img src={ojos} />}
                        title={'VISIÓN'}
                        description={
                            'Hemos vivido en nuestra propia piel lo que es escalar nuestras marcas. Por eso contamos con una visión mucho más completa y realista de la plataforma al habernos enfrentado personalmente a ella. '
                        }
                    />
                </ContainerCards>
                <ButtonConsultoria
                    bgColor="#ef9018"
                    marginBottom="4rem"
                    title={'Agendar Consulta'}
                    icon={
                        <CalendarMonthIcon
                            sx={{ color: 'white', marginLeft: '1rem' }}
                        />
                    }
                    border="0px solid #232F3E"
                />
            </Container>
        </MainContainer>
    )
}

export default memo(WorkWithUs)
