import { html } from 'lit';
import './index.js';
import '../ts-skeleton/index.js';

export default {
    title: 'Components/TextArea',
    component: 'ts-textarea',
    parameters: {
        actions: {
            handles: ['ts-textarea-count-change']
        },
        docs: {
            description: {
                component: "`ts-textarea` is a textarea component with a label, placeholder, info message, and a counter.",
            },
            source: {
                code: `

import "@transdevoficial/ts-ds-core/dist/components/ts-textarea";

<ts-textarea
    label="string"
    placeholder="string"
    info-message="string"
    max-count="number"
    id="string"
    name="string"
    disabled="boolean"
    inverse="boolean"
    only-text-area="boolean"
    @ts-textarea-count-change="event">
</ts-textarea>
                `,
            }
        },
    },
    argTypes: {
        label: {
            name: 'label',
            description: 'Label of the textarea',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Label' },
                category: 'Inputs',
            },
            control: {
                type: 'text',
            },
        },
        placeholder: {
            name: 'placeholder',
            description: 'Placeholder of the textarea',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Placeholder' },
                category: 'Inputs',
            },
            control: {
                type: 'text',
            },
        },
        infoMessage: {
            name: 'info-message',
            description: 'Info message of the textarea',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Info message' },
                category: 'Inputs',
            },
            control: {
                type: 'text',
            },
        },
        maxCount: {
            name: 'max-count',
            description: 'Max count of the textarea',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 'Max count' },
                category: 'Inputs',
            },
            control: {
                type: 'number',
            },
        },
        id: {
            name: 'id',
            description: 'Id of the textarea',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Id' },
                category: 'Inputs',
            },
            control: {
                type: 'text',
            },
        },
        name: {
            name: 'name',
            description: 'Name of the textarea',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Name' },
                category: 'Inputs',
            },
            control: {
                type: 'text',
            },
        },
        disabled: {
            name: 'disabled',
            description: 'Disabled state of the textarea',
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
            description: 'Inverse style',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State',
            },
            control: {
                type: 'boolean',
            },
        },
        onlyTextArea: {
            name: 'only-text-area',
            description: 'Only text area',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State',
            },
            control: {
                type: 'boolean',
            },
        },
        'ts-textarea-count-change': {
            name: 'ts-textarea-count-change',
            description: 'Event dispatched when the textarea count changes',
            table: {
                type: { summary: 'object' },
                defaultValue: { summary: '{}' },
                category: 'Events',
            },
        },
    },
}

export const TsTextArea = (args) => html`
    <ts-textarea
        label=${args.label}
        placeholder=${args.placeholder}
        info-message=${args.infoMessage}
        id=${args.id}
        name=${args.name}
        max-count=${args.maxCount}
        ?disabled=${args.disabled}
        ?inverse=${args.inverse}
        ?only-text-area=${args.onlyTextArea}
    ></ts-textarea>
`;

TsTextArea.args = {
    label: 'Label',
    placeholder: 'Placeholder',
    infoMessage: 'Info message',
    id: 'textarea',
    name: 'textarea',
    maxCount: 100,
    disabled: false,
    inverse: false,
    onlyTextArea: false,
}

export const Skeleton = () => html`
<div style='display: flex; flex-direction: column; gap: 20px'>
    <ts-skeleton width='120' height='20'></ts-skeleton>
    <ts-skeleton width='420' height='165'></ts-skeleton>
    <div style='display: flex; justify-content: space-between;'>
        <ts-skeleton width='80' height='20'></ts-skeleton>
        <ts-skeleton width='80' height='20'></ts-skeleton>
    </div>
</div>
`;