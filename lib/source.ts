import { docs } from '.source/server';
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { createElement } from "react";

// Create the proper source structure
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
            body: doc._exports?.default || doc.default
        }
    }))
};

export const source = loader({
    baseUrl: "/docs",
    source: customSource,
    icon(icon) {
        if (!icon) {
            return createElement(icons.Library);
        }
        if (icon in icons)
            return createElement(icons[icon as keyof typeof icons]);
    },
});