import { FC, memo } from 'react'
import { Button } from '@mui/material'
import { Props } from './type'

const ButtonContacto: FC<Props> = ({ title }) => {
    return (
        <Button
            sx={{
                borderColor: '#FF9900',
                color: '#FF9900',
                marginBottom: '1rem',
                marginRight: '1rem',
                marginLeft: '1rem',

                '&:hover': {
                    borderColor: '#FF6600',
                },
            }}
            href="https://calendly.com/agendagrowthboosters"
            variant="outlined"
        >
            {title}
        </Button>
    )
}

export default memo(ButtonContacto)
