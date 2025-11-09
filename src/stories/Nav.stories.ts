import type { Meta, StoryObj } from '@storybook/react';
import Navigation from '../components/navigation'; 

const meta: Meta<typeof Navigation> = {
  title: 'Navigation',
  component: Navigation,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Navigation>;
export const Base: Story = {
  args: {},
};