import styled from 'styled-components'
import { InputProps } from '@/types'
import { pxToRem } from '@/utils'

export const StyledInput = styled.input<InputProps>`
  background-color: ${({ theme }) => theme.textInput.active};
  color: ${({ theme }) => theme.textInput.activeColor};
  border: ${pxToRem(1)} solid ${({ theme }) => theme.textInput.borderColor};
  border-radius: ${pxToRem(8)};
  box-sizing: border-box;
  cursor: pointer;
  height: ${pxToRem(40)};
  font-size: ${pxToRem(14)};
  font-weight: 500;
  padding: ${pxToRem(8)} ${pxToRem(16)};
  transition: background-color 0.3s;
  width: 100%;

  &:disabled {
    background-color: ${({ theme }) => theme.textInput.disabled};
    border: ${pxToRem(1)} solid
      ${({ theme }) => theme.textInput.disabledBorderColor};
    color: ${({ theme }) => theme.textInput.disbledColor};
    cursor: not-allowed;
  }

  &:placeholder {
    color: ${({ theme }) => theme.textInput.placeholderColor};
  }
`
