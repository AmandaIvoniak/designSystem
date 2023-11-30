import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})
export interface BoxProps extends ComponentProps<typeof Box> {
  // serve para quando você importar esse componente poder modificar a tag (div/as span) Exmplo no componente Text
  as?: ElementType
}
