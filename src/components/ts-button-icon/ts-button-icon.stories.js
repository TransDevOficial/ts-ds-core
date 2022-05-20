import { html } from 'lit';
import './index.js';
import * as icons from '@transdevoficial/ds-assets/dist/assets/icons/index.js';

export default {
    title: 'Components/TsButton',
    component: 'ts-button-icon',
    parameters: {
        actions: {
            handles: ['ts-button-icon-click']
        },
        docs: {
            description: {
                component: 'TsButtonIcon component is a button icon component with a lot of options to customize it.'
            },
            source: {
                code: `
import '@transdevoficial/ts-ds-core/dist/components/ts-button-icon';

<ts-button-icon
    icon-src="string"
    label="string"
    size="string"
    variant="string"
    labeled="boolean"
    disabled="boolean"
    inverse="boolean"
    @ts-button-icon-click="event">
</ts-button-icon>
                `
            }
        }
    },
    argTypes: {
        iconSrc: {
            name: 'icon-src',
            description: 'The icon src',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
                category: 'Inputs'
            },
            control: {
                type: 'select',
                options: Object.keys(icons)
            }
        },
        label: {
            name: 'label',
            description: 'The label of button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
                category: 'Inputs'
            }
        },
        size: {
            name: 'size',
            description: 'The size of button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'medium' },
                category: 'Appearance'
            },
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            }
        },
        variant: {
            name: 'variant',
            description: 'The variant of button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary' },
                category: 'Appearance'
            },
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'danger', 'success', 'warning'],
            }
        },
        labeled: {
            name: 'labeled',
            description: 'Labeled state of button',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State'
            },
            control: {
                type: 'boolean'
            }
        },
        disabled: {
            name: 'disabled',
            description: 'Disabled state of button',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State'
            },
            control: {
                type: 'boolean'
            }
        },
        inverse: {
            name: 'inverse',
            description: 'Inverse state of button',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State'
            },
            control: {
                type: 'boolean'
            }
        },
        'ts-button-icon-click': {
            name: 'ts-button-icon-click',
            description: 'Custom event',
            table: {
                type: { summary: 'Event' },
                defaultValue: { summary: '{}' },
                category: 'Events'
            }
        }
    },
}

export const TsButtonIcon = (args) => html`
    <ts-button-icon
        icon-src=${icons[args.iconSrc]}
        label=${args.label}
        size=${args.size}
        variant=${args.variant}
        ?labeled=${args.labeled}
        ?disabled=${args.disabled}
        ?inverse=${args.inverse}
        @ts-button-icon-click=${args['ts-button-icon-click']}>
    ></ts-button-icon>
`;

TsButtonIcon.args = {
    iconSrc: '',
    label: 'Label',
    size: 'medium',
    variant: 'primary',
    labeled: false,
    disabled: false,
    inverse: false,
};