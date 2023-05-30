import { FC, memo } from 'react'
import CardServices from '../CardServices'
import Divider from '@mui/material/Divider'
import {
    MainContainer,
    Container,
    TitleContainer,
    TitleServices,
    SubTitleServices,
    SubTitleContainer,
    ContainerCards,
    SubSubTitleServices,
    SubSubTitleContainer,
} from './styles'

const ServicesComp: FC = () => {
    return (
        <MainContainer>
            <Container>
                <TitleContainer>
                    <TitleServices>SERVICIOS</TitleServices>
                </TitleContainer>
                <SubTitleContainer>
                    <SubTitleServices>
                        Nosotros lo hacemos por ti.
                    </SubTitleServices>
                </SubTitleContainer>
                <SubSubTitleContainer>
                    <SubSubTitleServices>
                        Deja que nuestro equipo de profesionales maneje todo el
                        proceso para que puedas dedicar todo tu tiempo a lo que
                        mejor sabes hacer.
                    </SubSubTitleServices>
                </SubSubTitleContainer>
                <ContainerCards>
                    <CardServices
                        title="Gestión de Marketplace"
                        description="Nosotros nos encargamos de todo el proceso, desde la creación de la cuenta hasta la optimización de los listados y la gestión del inventario. Con nuestro equipo de expertos, aseguramos que tu marca tenga una presencia sólida en el Amazon Marketplace y que tus ventas aumenten significativamente."
                        img="https://i.postimg.cc/zf98c6Rw/serv3.png"
                    />
                    <Divider
                        sx={{
                            width: '100px',
                            margin: '1rem auto',
                            height: '0.2rem',
                            backgroundColor: '#ef9018',
                            border: 'none',
                            display: {
                                xs: 'block',
                                md: 'none',
                            },
                        }}
                    />
                    <CardServices
                        title="Consultoría Estrategica"
                        description="Nuestro equipo de consultores de Amazon Marketplace te proporcionará las herramientas y el conocimiento para ayudarte a adaptar y optimizar tu estrategia de ventas. Trabajamos contigo para identificar oportunidades y superar obstáculos, para que puedas maximizar tus ventas en Amazon. ) Este es un servicio mensual de seguimiento, si quieres resolver una cosa puntual puedes contratar una sesión de consultoría."
                        img="https://i.postimg.cc/qMLBv190/serv1.png"
                    />
                    <Divider
                        sx={{
                            width: '100px',
                            margin: '1rem auto',
                            height: '0.2rem',
                            backgroundColor: '#ef9018',
                            border: 'none',
                            display: {
                                xs: 'block',
                                md: 'none',
                            },
                        }}
                    />
                    <CardServices
                        title="Full E-Commerce Operations"
                        description="Hemos hablado mucho de Amazon, pero nosotros tenemos todo lo que tu marca necesita para tener exito en la venta online. Desde integración con todos los marketplaces, pasando por desorrollo tecnológico a medida hasta logística propia. Una solución 360º para tu negocio."
                        img="https://i.postimg.cc/j5Pt0czp/serv2.png"
                    />
                    <Divider
                        sx={{
                            width: '100px',
                            margin: '1rem auto',
                            height: '0.2rem',
                            backgroundColor: '#ef9018',
                            border: 'none',
                            display: {
                                xs: 'block',
                                md: 'none',
                            },
                        }}
                    />
                    <CardServices
                        title="Sesiones de Consultoría"
                        description="Sesiones 1 a 1 con una duración de 1 hora donde te brindaremos una guía personalizada
                        que te impulsará a seguir adelante con tu proyecto. Estamos aquí para escucharte,
                        comprenderte y ofrecerte las estrategias más efectivas para alcanzar tus objetivos."
                        img="https://i.postimg.cc/sDBxX0fz/serv4.png"
                    />
                    <Divider
                        sx={{
                            width: '100px',
                            margin: '1rem auto',
                            height: '0.2rem',
                            backgroundColor: '#ef9018',
                            border: 'none',
                            display: {
                                xs: 'block',
                                md: 'none',
                            },
                        }}
                    />
                    <CardServices
                        title="Formación para empresas"
                        description="Potencia el éxito de tu empresa a través de nuestra exclusiva formación personalizada.
                        Nuestro programa de formación para empresas te proporciona las habilidades y
                        conocimientos necesarios para dominar todas las áreas y herramientas relacionadas con la
                        diversificación de tu negocio a través de marketplaces.
                        Con sesiones 1 a 1, te garantizamos una atención individualizada y adaptada a las
                        necesidades de tu equipo."
                        img="https://i.postimg.cc/63j66CDT/serv5.png"
                    />
                </ContainerCards>
            </Container>
        </MainContainer>
    )
}

export default memo(ServicesComp)
