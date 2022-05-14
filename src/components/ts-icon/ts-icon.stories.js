import { html } from 'lit';
import './index.js';
import * as icons from '@transdevoficial/ds-assets/dist/assets/icons/index.js';

export default {
    title: 'Components/TsIcon',
    component: 'ts-icon',
    parameters: {
        docs: {
            description: {
                component: 'TsIcon component is a icon component with a lot of options to customize it.'
            },
            source: {
                code: `
                    import '@transdevoficial/ts-ds-core/dist/components/ts-icon';

                    <ts-icon
                        src="string"
                        size="string"
                        inverse="boolean"
                    ></ts-icon>
                `
            }
        }
    },
    argTypes: {
        src: {
            name: 'src',
            description: 'The SVG source',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'bullet' },
                category: 'Inputs',
            },
            control: {
                type: 'select',
                options: Object.keys(icons),
            },
        },
        size: {
            name: 'size',
            description: 'Size of the icon',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'medium' },
                category: 'Appearance',
            },
            control: {
                type: 'select',
                options: ['small', 'medium', 'large']
            }
        },
        inverse: {
            name: 'inverse',
            description: 'Inverse the icon',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State',
            },
            control: {
                type: 'boolean',
            },
        },
    }
}

export const TsIcon = (args) => html`
    <ts-icon
        src="${icons[args.src]}"
        size="${args.size}"
        ?inverse="${args.inverse}"
    ></ts-icon>
`

TsIcon.args = {
    src: '',
    size: 'medium',
    inverse: false
}