import { docs } from '.source/server';
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { createElement } from "react";

interface ExtendedPageData {
    title: string;
    description: string;
    icon?: string;
    toc?: boolean;
    full?: boolean;
}

// Create the proper source structure - map docs to the expected format
const customSource = {
    files: docs.map((doc: any) => ({
        type: 'page' as const,
        path: doc.info.path,
        data: {
            title: doc.title,
            description: doc.description,
            icon: doc.icon,
            toc: doc.toc,
            full: doc.full,
        } as ExtendedPageData,
        content: doc.default // Try accessing the default export directly
    }))
};

export const source = loader({
    baseUrl: "/docs",
    source: customSource,
    icon(icon?: string) {
        if (!icon) {
            return createElement(icons.Library);
        }
        if (icon in icons)
            return createElement(icons[icon as keyof typeof icons]);
    },
});