import { FC, memo } from 'react'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import WorkIcon from '@mui/icons-material/Work'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CardWork from '../CardWork'
import {
    Container,
    ContainerCards,
    MainContainer,
    SubSubTitleContainer,
    SubSubTitleServices,
    SubTitleContainer,
    SubTitleServices,
    TitleContainer,
    TitleServices,
} from './styles'

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
                            <AccessTimeFilledIcon sx={{ fontSize: '4rem' }} />
                        }
                        title={'COMPROMISO'}
                        description={
                            'Buscamos una relación óptima con la que las dos partes podamos GANAR-GANAR. Con este modelo de negocio contaremos con unos intereses alineados creando así una sinergia perfecta.'
                        }
                    />
                    <CardWork
                        icon={<WorkIcon sx={{ fontSize: '4rem' }} />}
                        title={'CRECIMIENTO'}
                        description={
                            'Análisis constante del mercado con el fin de descubrir nuevas tendencias de productos con alta potencial de ventas para conseguir el escalado de su negocio.'
                        }
                    />
                    <CardWork
                        icon={<CheckBoxIcon sx={{ fontSize: '4rem' }} />}
                        title={'VISIÓN'}
                        description={
                            'Hemos vivido en nuestra propia piel lo que es escalar nuestras marcas. Por eso contamos con una visión mucho más completa y realista de la plataforma al habernos enfrentado personalmente a ella. '
                        }
                    />
                </ContainerCards>
            </Container>
        </MainContainer>
    )
}

export default memo(WorkWithUs)
