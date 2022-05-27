import { html } from 'lit';
import './index.js';

export default {
    title: 'Components/TsSubtitle',
    component: 'ts-subtitle',
}

export const TsSubtitle = (args) => html`
    <ts-subtitle
        label="${args.label}"
        ?inverse="${args.inverse}">
    </ts-subtitle>
`;

TsSubtitle.args = {
    label: 'Subtitle',
    inverse: false,
}