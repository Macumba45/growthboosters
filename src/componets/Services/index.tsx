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
                        title="Gestión de Markeplace"
                        description="Nosotros nos encargamos de todo el proceso, desde la creación de la cuenta hasta la optimización de los listados y la gestión del inventario. Con nuestro equipo de expertos, aseguramos que tu marca tenga una presencia sólida en el Amazon Marketplace y que tus ventas aumenten significativamente."
                        img="https://i.postimg.cc/13vXRg28/servicios1.jpg"
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
                        description="Nuestro equipo de consultores de Amazon Marketplace te proporcionará las herramientas y el conocimiento para ayudarte a adaptar y optimizar tu estrategia de ventas. Trabajamos contigo para identificar oportunidades y superar obstáculos, para que puedas maximizar tus ventas en Amazon."
                        img="https://i.postimg.cc/W4K4rB2j/servicios2.jpg"
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
                        title="Kunnan: Full E-Commerce Operations"
                        description="Hemos hablado mucho de Amazon, pero nosotros tenemos todo lo que tu marca necesita para tener exito en la venta online. Desde integración con todos los marketplaces, pasando por desorrollo tecnológico a medida hasta logística propia. Una solución 360º para tu negocio."
                        img="https://i.postimg.cc/q7gRNJHj/servicios3.png"
                    />
                </ContainerCards>
            </Container>
        </MainContainer>
    )
}

export default memo(ServicesComp)