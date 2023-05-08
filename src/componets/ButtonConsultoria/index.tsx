import { FC, memo } from 'react'
import { Button } from '@mui/material'
import { Props } from './type'

const ButtonConsulta: FC<Props> = ({ title }) => {
    return (
        <Button
            sx={{
                backgroundColor: '#FF9900',
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
        </Button>
    )
}

export default memo(ButtonConsulta)
