import { html } from 'lit';
import './index.js';

export default {
    title: 'Components/List',
    component: 'ts-list',
    parameters: {
        docs: {
            description: {
                component: 'The `<ts-list>` component is used to display a list.',
            },
            source: {
                code: `

import '@transdevoficial/ts-ds-core/dist/components/ts-list';

<ts-list
    data='array'
    inverse='boolean'>
</ts-list>
                `,
            }
        }
    },
    argTypes: {
        data: {
            name: 'data',
            description: 'Data of the list',
            table: {
                type: { summary: 'array' },
                defaultValue: { summary: '[]' },
                category: 'Inputs',
            },
            control: {
                type: "array",
            }
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
            }
        },
    }
};

export const TsList = (args) => html`
    <ts-list data=${args.data} ?inverse=${args.inverse}>
        ${args.data.map((item) => html`
            <ts-list-item>
                <ts-subtitle label="${item.label}" ?inverse=${args.inverse}/>
            </ts-list-item>
        `)}
    </ts-list>
    `;

TsList.args = {
    data: [
        { label: 'Item 1' },
        { label: 'Item 2' },
        { label: 'Item 3' },
    ],
    inverse: false
}
