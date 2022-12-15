// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { PaginacaoComponent } from './paginacao.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Unifor/Paginacao',
  component: PaginacaoComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<PaginacaoComponent> = (args: PaginacaoComponent) => ({
  props: args,
});

export const TotalPages = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TotalPages.args = {
    totalPages: 320,
    rows: 10,
};