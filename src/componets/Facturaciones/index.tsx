import { FC, memo } from 'react'
import CardFacturaciones from '../CardFacturaciones'
import {
    MainContainer,
    SubTitleContainer,
    SubTitleServices,
    TitleContainer,
    TitleServices,
} from './styles'

const FacturacionesComp: FC = () => {
    return (
        <MainContainer>
            <TitleContainer>
                <TitleServices>¿QUÉ HEMOS CONSEGUIDO?</TitleServices>
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
