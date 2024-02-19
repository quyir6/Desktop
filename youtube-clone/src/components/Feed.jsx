import {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import { BorderRight } from '@mui/icons-material'


const Feed = () => {
  return (
    <Stack sx={{ flexDirection: {sx: "column", md: "row" }}}>
      <Box sx={{
        height: { sx: 'auto', md: '92vh'}
        , BorderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2}
        }}>
          Sidebar

          <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
            Copyright 2024 GJS
          </Typography>
      </Box>
    </Stack>
  )
}

export default Feed