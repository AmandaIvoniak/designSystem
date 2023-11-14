import { Button, ButtonProps } from '@ignite-designSystem/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Enviar',
  },
}
export const Secondary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}
