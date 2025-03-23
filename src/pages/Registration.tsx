import { Box, Container, Grid2 } from '@mui/material'
import { BannerImage } from '@/components'

function Registration() {
  return (
    <>
      <Box>
        <Grid2 container>
          <Grid2
            size={{ xs: 12, sm: 6 }}
            sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
          >
            <Container maxWidth="sm">
              <h1>CADASTRO</h1>
            </Container>
          </Grid2>

          <Grid2 size={{ sm: 6 }} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <BannerImage />
          </Grid2>
        </Grid2>
      </Box>
    </>
  )
}

export default Registration
