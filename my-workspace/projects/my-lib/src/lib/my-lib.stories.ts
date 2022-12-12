import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import { MyLibComponent } from './my-lib.component';

export default {
  title: 'Minha Lib',
  component: MyLibComponent,
} as Meta;

const Template: Story<MyLibComponent> = (args: MyLibComponent) => ({
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
