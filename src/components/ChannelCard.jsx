import React from 'react'
import { Link } from 'react-router-dom'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { Check, CheckCircle } from '@mui/icons-material'

import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail }) => (
    <Box
        sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            width: { xs: '356px', md: '400px' },
            height: '326px',
            margin: 'auto'
        }}>

        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'çenter', color: '#FFF' }}>
                <CardMedia
                    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #E3E3E3' }}
                />
                <Typography variant='h6'>
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{ fontsize: 12, color: 'gray', marginLeft: '5px'}}></CheckCircle>
                </Typography>

                {channelDetail?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
                    </Typography>
                )}

            </CardContent>

        </Link>

    </Box>
)

export default ChannelCard