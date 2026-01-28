import { notFound } from "next/navigation";
import {
    DocsPage,
    DocsBody,
    DocsTitle,
    DocsDescription,
} from "fumadocs-ui/page";
import Preview from "@/components/mdx/preview";
import { PreviewClient } from "@/components/mdx/preview-client";

export const dynamic = 'force-dynamic';

export default async function Page(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const slug = params.slug || [];
    
    // Create the file path for the MDX
    const filePath = slug.length > 0 ? slug.join('/') : 'index';
    
    try {
        // Dynamically import the MDX file
        const mdxModule = await import(`../../../content/docs/${filePath}.mdx`);
        
        // Get the default export (the MDX component)
        const MDX = mdxModule.default;
        
        // Get frontmatter data
        const frontmatter = mdxModule.frontmatter || {};
        
        if (!MDX) {
            return (
                <DocsPage toc={frontmatter.toc} full={frontmatter.full}>
                    <DocsTitle>{frontmatter.title || 'Untitled'}</DocsTitle>
                    <DocsDescription>{frontmatter.description || 'No description'}</DocsDescription>
                    <DocsBody>
                        <div className="text-red-500 p-4 border border-red-200 rounded">
                            Error: MDX component not found in file.
                        </div>
                    </DocsBody>
                </DocsPage>
            );
        }

        return (
            <DocsPage toc={frontmatter.toc} full={frontmatter.full}>
                <DocsTitle>{frontmatter.title || 'Untitled'}</DocsTitle>
                <DocsDescription>{frontmatter.description || 'No description'}</DocsDescription>
                <DocsBody>
                    <MDX components={{ Preview, PreviewClient }} />
                </DocsBody>
            </DocsPage>
        );
    } catch (error) {
        console.error('Error loading MDX:', error);
        return (
            <DocsPage>
                <DocsTitle>Error</DocsTitle>
                <DocsDescription>Could not load page</DocsDescription>
                <DocsBody>
                    <div className="text-red-500 p-4 border border-red-200 rounded">
                        Error: Could not load MDX file for path: {filePath}
                        <pre className="mt-2 text-sm">{error?.toString()}</pre>
                    </div>
                </DocsBody>
            </DocsPage>
        );
    }
}

export async function generateStaticParams() {
    // Return all possible MDX file paths
    return [
        { slug: [] }, // index
         { slug: ['components', 'action-search-bar'] },
        { slug: ['components', 'ai-input'] },
        { slug: ['components', 'alert'] },
        { slug: ['components', 'avatar-picker'] },
        { slug: ['components', 'background-circles'] },
         { slug: ['components', 'background-paths'] },
        { slug: ['components', 'beams-background'] },
        { slug: ['components', 'bento-grid'] },
        { slug: ['components', 'button'] },
        { slug: ['components', 'card'] },
        { slug: ['components', 'checkout-interaction'] },
        { slug: ['components', 'currency-transfer'] },
        { slug: ['components', 'faq'] },
        { slug: ['components', 'hand-written-title'] },
        { slug: ['components', 'hero-geometric'] },
        { slug: ['components', 'input'] },
        { slug: ['components', 'list'] },
        { slug: ['components', 'matrix-text'] },
        { slug: ['components', 'particle-button'] },
        { slug: ['components', 'particles-background'] },
        { slug: ['components', 'pricing'] },
        { slug: ['components', 'profile'] },
        { slug: ['components', 'text'] },
        { slug: ['components', 'toolbar'] },
        { slug: ['components', 'tweet-card'] },
        { slug: ['components', 'vercel-v0-chat'] },
        { slug: ['hooks', 'use-auto-resize-textarea'] },
        { slug: ['blocks', 'ai-card-generation'] },
        { slug: ['blocks', 'ai-chat'] },
        { slug: ['blocks', 'auth-basic'] },
        { slug: ['blocks', 'dashboard'] },
        { slug: ['blocks', 'minimal-shop'] },
    ];
}

export async function generateMetadata(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const slug = params.slug || [];
    const filePath = slug.length > 0 ? slug.join('/') : 'index';
    
    try {
        const mdxModule = await import(`../../../content/docs/${filePath}.mdx`);
        const frontmatter = mdxModule.frontmatter || {};
        
        return {
            title: frontmatter.title || 'Documentation',
            description: frontmatter.description || 'Documentation page',
        };
    } catch (error) {
        return {
            title: 'Documentation',
            description: 'Documentation page',
        };
    }
}
