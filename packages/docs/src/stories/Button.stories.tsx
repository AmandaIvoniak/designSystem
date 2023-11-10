
import { Button } from "@ignite-designSystem/react";
import type {StoryObj, Meta} from "@storybook/react"


export default {
    title: "Button",
    component: Button,
    args: {
        children: "Enviar",
    }
} as Meta;


export const Primary: StoryObj = {
    args: {
        children:"Enviar",
    }};
export const Secondary: StoryObj = {};