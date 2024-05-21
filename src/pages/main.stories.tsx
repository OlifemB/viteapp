import { Meta, StoryObj } from '@storybook/react';
import Main from './main';

const meta: Meta<typeof Main> = {
  title: 'App',
  component: Main,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Main>;

export const Default: Story = {};
