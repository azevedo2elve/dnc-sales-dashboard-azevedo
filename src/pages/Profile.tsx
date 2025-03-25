import { useContext } from 'react'
import { CardComponent, StyledButton, Header } from '@/components'
import { AppThemeContext } from '@/contexts/AppThemeContext'

function Proflie() {
  const themeContext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <CardComponent>
        <StyledButton className="primary" onClick={themeContext?.toggleTheme}>
          Trocar para tema{' '}
          {themeContext?.appTheme == 'light' ? 'escuro' : 'claro'}
        </StyledButton>
      </CardComponent>
    </>
  )
}

export default Proflie
