import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RateStars } from './RateStars';

const Template: ComponentStory<typeof RateStars> = function (args) {
  return <RateStars {...args} />;
};

export const Showcase = Template.bind({});
Showcase.args = {
  rate: 3
};

export default {
  title: 'componentes/RateStars',
  component: RateStars
} as ComponentMeta<typeof RateStars>;
