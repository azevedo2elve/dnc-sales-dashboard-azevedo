import styled from 'styled-components'
import { pxToRem } from '@/utils'

export const CardComponent = styled.div`
  background-color: ${({ theme }) => theme.card.background};
  border: ${pxToRem(1)} solid ${({ theme }) => theme.card.border};
  border-radius: ${pxToRem(8)};
  box-sizing: border-box;
  padding: ${pxToRem(24)};
  width: 100%;

  &.alert {
    background-color: ${({ theme }) => theme.card.alert};
    border-color: ${({ theme }) => theme.card.alert};
  }

  &.success {
    background-color: ${({ theme }) => theme.card.success};
    border-color: ${({ theme }) => theme.card.success};
  }

  &.warning {
    background-color: ${({ theme }) => theme.card.warning};
    border-color: ${({ theme }) => theme.card.warning};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
