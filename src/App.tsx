import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { Reset } from 'styled-reset'
import Router from './router'
import { useEffect } from 'react';


const ResetStylesOnUnload = () => {
    useEffect(() => {
        const handleBeforeUnload = () => {
            // Restablecer o limpiar los estilos aquí
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return null;
};




function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Reset />
                <Router />
            </ThemeProvider>
        </>

    )
}

export default App

