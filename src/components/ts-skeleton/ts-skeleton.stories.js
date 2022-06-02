import { html } from "lit";
import "./index.js";

export default {
    title: "Components/Skeleton",
    component: "ts-skeleton",
    parameters: {
        docs: {
            description: {
                component:
                    "A `<ts-skeleton>` component that can be used to display a loading state.",
            },
            source: {
                code: `

import "@transdevoficial/ts-ds-core/dist/components/ts-skeleton";

<ts-skeleton
    width="number"
    height="number"
    format="flat|rounded|circular"
></ts-skeleton>
                `,

            }
        }
    },
    argTypes: {
        width: {
            name: "width",
            description: "Width of the skeleton",
            table: {
                type: { summary: "number" },
                defaultValue: { summary: 100 },
                category: "Inputs",
            },
            control: {
                type: "number",
            }
        },
        height: {
            name: "height",
            description: "Height of the skeleton",
            table: {
                type: { summary: "number" },
                defaultValue: { summary: 100 },
                category: "Inputs",
            },
            control: {
                type: "number",
            }
        },
        format: {
            name: "format",
            description: "Format of the skeleton",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "flat" },
                category: "Appearance",
            },
            control: {
                type: "select",
                options: ["flat", "rounded", "circular"],
            }
        }
    }
}

export const TsSkeleton = (args) => html`
    <ts-skeleton
        width=${args.width}
        height=${args.height}
        format=${args.format}>
    </ts-skeleton>
`;

TsSkeleton.args = {
    width: 100,
    height: 100,
    format: "circular",
}