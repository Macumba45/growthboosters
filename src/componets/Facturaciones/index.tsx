import { FC, memo } from 'react'
import {
    MainContainer,
    SubTitleContainer,
    SubTitleServices,
    TitleContainer,
    TitleServices,
} from './styles'
import CardFacturaciones from '../CardFacturaciones'

const FacturacionesComp: FC = () => {
    return (
        <MainContainer>
            <TitleContainer>
                <TitleServices>¿QUE HEMOS CONSEGUIDO?</TitleServices>
            </TitleContainer>
            <SubTitleContainer>
                <SubTitleServices>
                    El resultado de alguno de nuestros clientes
                </SubTitleServices>
            </SubTitleContainer>
            <CardFacturaciones />
        </MainContainer>
    )
}

export default memo(FacturacionesComp)
