import { html } from "lit";
import "./index.js";
import '../ts-skeleton/index.js';

export default {
  title: "Components/TsButton/ButtonGroup",
  component: "ts-button-group",
  parameters: {
    actions: {
      handles: ["ts-button-primary-click", "ts-button-secondary-click"],
    },
    docs: {
      description: {
        component:
          "`<ts-button-group>` component is a button group component with a lot of options to customize it.",
      },
      source: {
        code: `
import '@transdevoficial/ts-ds-core/dist/components/ts-button-group';

<ts-button-group
  button-primary-label="string"
  button-secondary-label="string"
  button-primary-disabled="boolean"
  button-secondary-disabled="boolean"
  inverse="boolean"
  @ts-button-primary-click="event"
  @ts-button-secondary-click="event">
</ts-button-group>
                `,
      },
    },
  },
  argTypes: {
    buttonPrimaryLabel: {
      name: "button-primary-label",
      description: "Label of the primary button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Primary" },
        category: "Inputs",
      },
      control: {
        type: "text",
      },
    },
    buttonSecondaryLabel: {
      name: "button-secondary-label",
      description: "Label of the secondary button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Secondary" },
        category: "Inputs",
      },
      control: {
        type: "text",
      },
    },
    buttonPrimaryDisabled: {
      name: "button-primary-disabled",
      description: "Disabled state of the primary button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
      control: {
        type: "boolean",
      },
    },
    buttonSecondaryDisabled: {
      name: "button-secondary-disabled",
      description: "Disabled state of the secondary button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
      control: {
        type: "boolean",
      },
    },
    inverse: {
      name: "inverse",
      description: "Inverse state of the button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
      control: {
        type: "boolean",
      },
    },
    'ts-button-primary-click': {
      name: "ts-button-primary-click",
      description: "Event of the primary button",
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
        category: "Events",
      },
    },
    'ts-button-secondary-click': {
      name: "ts-button-secondary-click",
      description: "Event of the secondary button",
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
        category: "Events",
      },
    },
  },
};

export const TsButtonGroup = (args) => html`
  <ts-button-group
    button-primary-label=${args.buttonPrimaryLabel}
    button-secondary-label=${args.buttonSecondaryLabel}
    ?button-primary-disabled=${args.buttonPrimaryDisabled}
    ?button-secondary-disabled=${args.buttonSecondaryDisabled}
    ?inverse=${args.inverse}
    @ts-button-primary-click=${args['ts-button-primary-click']}
    @ts-button-secondary-click=${args['ts-button-secondary-click']}
  ></ts-button-group>
`;

TsButtonGroup.args = {
  buttonPrimaryLabel: "Primary",
  buttonSecondaryLabel: "Secondary",
  buttonPrimaryDisabled: false,
  buttonSecondaryDisabled: false,
  inverse: false,
};

export const Skeleton = () => html`
<div style='display: flex; gap: 20px;'>
<ts-skeleton width='120' height='40'></ts-skeleton>
<ts-skeleton width='120' height='40'></ts-skeleton>
</div>
`;
