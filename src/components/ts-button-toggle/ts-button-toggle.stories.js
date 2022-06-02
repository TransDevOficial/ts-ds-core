import { html } from 'lit';
import './index.js';
import '../ts-skeleton/index.js';

export default {
    title: 'Components/TsButton/ButtonToggle',
    component: 'ts-button-toggle',
    parameters: {
        actions: {
            handles: ['ts-button-toggle-click'],
        },
        docs: {
            description: {
                component:
                    'The `<ts-button-toggle>` component is a toggle button that can be used to toggle between two states.',
            },
            source: {
                code: `

import "@transdevoficial/ts-ds-core/dist/components/ts-button-toggle";

<ts-button-toggle
    label="string"
    state-label="string"
    checked="boolean"
    disabled="boolean"
    inverse="boolean"
    @ts-button-toggle-click="event">
</ts-button-toggle>
                `,
            }
        }
    },
    argTypes: {
        label: {
            name: 'label',
            description: 'Label of the button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Label' },
                category: 'Inputs',
            },
            control: {
                type: 'text',
            },
        },
        stateLabel: {
            name: 'state-label',
            description: 'Label of the state',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'State Label' },
                category: 'Inputs',
            },
            control: {
                type: 'text',
            },
        },
        checked: {
            name: 'checked',
            description: 'Checked state of the button',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State',
            },
            control: {
                type: 'boolean',
            },
        },
        disabled: {
            name: 'disabled',
            description: 'Disabled state of the button',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State',
            },
            control: {
                type: 'boolean',
            },
        },
        inverse: {
            name: 'inverse',
            description: 'Inverse state of the button',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State',
            },
            control: {
                type: 'boolean',
            },
        },
        'ts-button-toggle-click': {
            name: 'ts-button-toggle-click',
            description: 'Event emitted when the button is clicked',
            table: {
                type: { summary: 'object' },
                defaultValue: { summary: '{}' },
                category: 'Events',
            },
        },
    }
}

export const TsButtonToggle = (args) => html`
    <ts-button-toggle
        label=${args.label}
        state-label=${args.stateLabel}
        ?checked=${args.checked}
        ?disabled=${args.disabled}
        ?inverse=${args.inverse}
    ></ts-button-toggle>
`;

TsButtonToggle.args = {
    label: 'Label',
    stateLabel: 'State Label',
    checked: false,
    disabled: false,
    inverse: false,
}

export const Skeleton = () => html`
    <ts-skeleton width="40" height="20" format="flat"></ts-skeleton>
    <br>
    <ts-skeleton width="45" height="20" format="flat"></ts-skeleton>
    <br>
    <ts-skeleton width="80" height="20" format="flat"></ts-skeleton>
`;