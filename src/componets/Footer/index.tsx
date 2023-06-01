import { FC, memo } from 'react'
import { DesignedBy, LogoContainer, MainContainer, SloganText, SpanBold } from './styles'

const Footer: FC = () => {
    return (
        <MainContainer>
            <LogoContainer />
            <SloganText>
                Invierte tu tiempo y esfuerzos en tu marca. {<br />}{' '}
                <SpanBold>Dejanos la gestión a nosotros.</SpanBold>
                {<br />}
                <DesignedBy target='blank' href='https://gonzalolobocv.vercel.app/'>Designed by Macumba</DesignedBy>
            </SloganText>
        </MainContainer>
    )
}

export default memo(Footer)
