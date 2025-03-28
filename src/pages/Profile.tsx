import { useContext } from 'react'
import { AppThemeContext } from '@/contexts/AppThemeContext'

// COMPONENTS
import { Container, Grid2 } from '@mui/material'
import { CardComponent, StyledH2, StyledButton, Header } from '@/components'

// SERVICES
import { logout } from '@/services'

function Proflie() {
  const themeContext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CardComponent>Seus dados...</CardComponent>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CardComponent>
              <StyledH2 className="mb-1">Definições de conta</StyledH2>
              <StyledButton
                className="primary mb-1"
                onClick={themeContext?.toggleTheme}
              >
                Trocar para tema{' '}
                {themeContext?.appTheme == 'light' ? 'escuro' : 'claro'}
              </StyledButton>
              <StyledButton className="alert" onClick={logout}>
                Logout
              </StyledButton>
            </CardComponent>
          </Grid2>
        </Grid2>
      </Container>
    </>
  )
}

export default Proflie
