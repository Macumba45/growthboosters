import { FC, memo } from 'react'
import { Button } from '@mui/material'
import { Props } from './type'

const ButtonConsulta: FC<Props> = ({ title, icon, bgColor, marginBottom }) => {
    return (
        <Button
            target="blank"
            sx={{
                backgroundColor: bgColor || '#ef9018', // usar el valor de bgColor si existe, de lo contrario usar el color por defecto
                color: '#F7F7F7',
                marginBottom: marginBottom || '1rem',
                marginRight: '1rem',
                marginLeft: '1rem',
                fontSize: '1rem',
                width: '300px',
                '&:hover': {
                    backgroundColor: '#FF6600',
                },
            }}
            href="https://calendly.com/agendagrowthboosters"
            variant="contained"
        >
            {title}
            {icon}
        </Button>
    )
}

export default memo(ButtonConsulta)
