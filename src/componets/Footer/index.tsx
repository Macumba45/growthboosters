import { FC, memo } from 'react';
import { LogoContainer, MainContainer, SloganText, SpanBold } from './styles';



const Footer: FC = () => {


    return (


        <MainContainer>
            <LogoContainer />
            <SloganText>
                Invierte tu tiempo y esfuerzos en tu marca. {<br />} <SpanBold>Dejanos la gestión a nosotros.</SpanBold>
            </SloganText>

        </MainContainer>
    );


}



export default memo(Footer);