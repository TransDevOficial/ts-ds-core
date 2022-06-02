import "./index.js";
import { html } from "lit";
import '../ts-skeleton/index.js';

export default {
  title: "Components/Button",
  component: "ts-button",
  parameters: {
    actions: {
      handles: ["ts-button-click"],
    },
    docs: {
      description: {
        component:
          "`<ts-button>` component is a button component with a lot of options to customize it.",
      },
      source: {
        code: `
import '@transdevoficial/ts-ds-core/dist/components/ts-button';

<ts-button 
  size="string"
  variant="string"
  format="string"
  label="string"
  disabled="boolean"
  loading="boolean"
  inverse="boolean"
  @ts-button-click="event">
</ts-button>
                `,
      },
    },
  },
  argTypes: {
    size: {
      name: "size",
      description: "Size of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" },
        category: "Appearance",
      },
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    variant: {
      name: "variant",
      description: "Variant of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
        category: "Appearance",
      },
      control: {
        type: "select",
        options: ["primary", "secondary", "danger", "success", "warning"],
      },
    },
    format: {
      name: "format",
      description: "Format of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "flat" },
        category: "Appearance",
      },
      control: {
        type: "select",
        options: ["flat", "rounded"],
      },
    },
    label: {
      name: "label",
      description: "Label of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Button" },
        category: "Inputs",
      },
      control: {
        type: "text",
      },
    },
    disabled: {
      name: "disabled",
      description: "Disabled state of the button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
      control: {
        type: "boolean",
      },
    },
    loading: {
      name: "loading",
      description: "Loading state of the button",
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
    "ts-button-click": {
      name: "ts-button-click",
      description: "Event dispatched when the button is clicked",
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
        category: "Events",
      },
      control: {
        type: "event",
      },
    },
  },
};

export const TsButton = (args) => html`
  <ts-button
    size=${args.size}
    variant=${args.variant}
    format=${args.format}
    label=${args.label}
    ?disabled=${args.disabled}
    ?loading=${args.loading}
    ?inverse=${args.inverse}
    @ts-button-click=${args["ts-button-click"]}
  ></ts-button>
`;

TsButton.args = {
  size: "medium",
  variant: "primary",
  format: "flat",
  label: "Button",
  disabled: false,
  loading: false,
  inverse: false,
};

export const Skeleton = (args) => html`
<ts-skeleton width='120' height='40' format=${args.format}></ts-skeleton>
`;