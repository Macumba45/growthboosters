import { FC, memo } from 'react'
import { Button } from '@mui/material'
import { Props } from './type'

const ButtonConsulta: FC<Props> = ({ title, icon }) => {
    return (
    
        <Button
            target="blank"
            sx={{
                backgroundColor: '#ef9018',
                color: '#F7F7F7',
                marginBottom: '1rem',
                marginRight: '1rem',
                marginLeft: '1rem',
                fontSize: '1rem',
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
