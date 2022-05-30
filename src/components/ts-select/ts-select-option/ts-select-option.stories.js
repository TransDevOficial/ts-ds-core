import './index.js';

export default {
    title: 'Components/TsSelect',
    component: 'ts-select-option',
    parameters: {
        docs: {
            description: {
                component: '`<ts-select-option>` is a option component with custom styles and options.',
            },
            source: {
                code: `

import '@transdevoficial/ts-ds-core/dist/components/ts-select';

<ts-select-option
    value='string'
    label='string'>
</ts-select-option>
            `,
            },
        },
    },
};