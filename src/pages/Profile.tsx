/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { AppThemeContext } from '@/contexts/AppThemeContext'
import Cookies from 'js-cookie'

// COMPONENTS
import { Container, Grid2 } from '@mui/material'
import {
  CardComponent,
  StyledH2,
  StyledButton,
  Header,
  FormComponent,
} from '@/components'

// HOOKS
import { useFormValidation, useGet, usePut, useDelete } from '@/hooks'

// SERVICES
import { logout } from '@/services'

// TYPES
import {
  InputProps,
  ProfileData,
  ProfileEditableData,
  MessageProps,
} from '@/types'

function Proflie() {
  const themeContext = useContext(AppThemeContext)

  // HOOKS
  const [updateMessage, setUpdateMessage] = useState<MessageProps>({
    type: 'success',
    msg: '',
  })
  const clearMessage = () => {
    setTimeout(() => {
      setUpdateMessage({
        type: 'success',
        msg: '',
      })
    }, 3000)
  }

  const {
    data: profileData,
    loading: profileLoading,
    error: profileError,
  } = useGet<ProfileData>('profile')

  const {
    data: profileUpdateData,
    putData: profilePutData,
    loading: profileUpdateLoading,
    error: profileUpdateError,
  } = usePut<ProfileEditableData>('profile/update')

  const { deleteData: profileDeleteData, loading: profileDeleteLoading } =
    useDelete('profile/delete')

  useEffect(() => {
    if (profileData) {
      handleChange(0, profileData.name)
      handleChange(1, profileData.email)
      handleChange(2, profileData.phone)
    }
  }, [profileData])

  // FORM
  const inputs: InputProps[] = [
    { name: 'name', type: 'text', placeholder: 'Nome', required: true },
    { name: 'email', type: 'email', placeholder: 'Email', disabled: true },
    { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
  ]
  const { formValues, formValid, handleChange } = useFormValidation(inputs)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await profilePutData({
      name: String(formValues[0]),
      phone: String(formValues[2]),
    })
  }
  const handleDelete = async () => {
    if (
      confirm(
        'Tem certeza que deseja excluir sua conta? Se sim, certifique-se de deletar os seus leads antes.'
      )
    ) {
      try {
        await profileDeleteData()
        alert('Perfil deletado com sucesso!')
        Cookies.remove('Authorization')
        window.location.href = '/'
      } catch (error) {
        console.log(error)

        alert(
          'Não foi possível deletar o perfil. Entre em contato com nosso suporte'
        )
      }
    }
  }

  useEffect(() => {
    if (profileUpdateData) {
      setUpdateMessage({
        type: 'success',
        msg: 'Perfil atualizado com sucesso!',
      })
    } else if (profileUpdateError) {
      setUpdateMessage({
        type: 'error',
        msg: 'Não foi possível realizar a operação. Entre em contato com nosso suporte.',
      })
    }
    clearMessage()
  }, [profileUpdateData, profileUpdateError])

  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            {!profileError && (
              <CardComponent
                className={
                  profileLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''
                }
              >
                {!profileLoading && profileData && (
                  <>
                    <StyledH2 className="mb-1">Seus dados</StyledH2>
                    <FormComponent
                      inputs={inputs.map((input, index) => ({
                        ...input,
                        type: input.type,
                        placeholder: input.placeholder,
                        value: formValues[index] || '',
                        onChange: (e: ChangeEvent<HTMLInputElement>) =>
                          handleChange(
                            index,
                            (e.target as HTMLInputElement).value
                          ),
                      }))}
                      buttons={[
                        {
                          className: 'primary',
                          disabled: !formValid || profileUpdateLoading,
                          type: 'submit',
                          onClick: handleSubmit,
                          children: profileUpdateLoading
                            ? 'Aguarde...'
                            : 'Atualizar meu perfil',
                        },
                        {
                          className: 'alert',
                          disabled: profileDeleteLoading,
                          type: 'button',
                          onClick: handleDelete,
                          children: profileDeleteLoading
                            ? 'Aguarde...'
                            : 'Excluir minha conta',
                        },
                      ]}
                      message={updateMessage}
                    />
                  </>
                )}
              </CardComponent>
            )}
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
