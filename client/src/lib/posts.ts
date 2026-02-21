export interface BlogPost {
    slug: string;
    title: string;
    titleEn?: string;
    date: string;
    category: string;
    excerpt: string;
    content: string;
    tags: string[];
    readTime: string;
}

// Simple browser-compatible frontmatter parser (no Node.js dependencies)
function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!match) return { data: {}, content: raw };

    const yamlBlock = match[1];
    const content = match[2];
    const data: Record<string, unknown> = {};

    for (const line of yamlBlock.split(/\r?\n/)) {
        // Match key: value pairs (handles quoted strings and arrays)
        const kvMatch = line.match(/^(\w+):\s*(.*)$/);
        if (!kvMatch) continue;

        const key = kvMatch[1];
        let value: unknown = kvMatch[2].trim();

        // Parse arrays like ["tag1", "tag2", "tag3"]
        if (typeof value === "string" && value.startsWith("[")) {
            try {
                value = JSON.parse(value);
            } catch {
                // fallback: keep as string
            }
        }
        // Strip surrounding quotes
        else if (typeof value === "string" && /^["'].*["']$/.test(value)) {
            value = value.slice(1, -1);
        }

        data[key] = value;
    }

    return { data, content };
}

// Vite glob import: load all .md files from content/posts/ as raw strings
// Relative path from client/src/lib/ to project root content/posts/
const modules = import.meta.glob("../../../content/posts/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
}) as Record<string, string>;

function buildPosts(): BlogPost[] {
    return Object.entries(modules)
        .map(([filePath, raw]) => {
            const slug = filePath.split("/").pop()!.replace(/\.md$/, "");
            const { data, content } = parseFrontmatter(raw);
            return {
                slug,
                title: (data.title as string) ?? "",
                titleEn: data.titleEn as string | undefined,
                date: (data.date as string) ?? "",
                category: (data.category as string) ?? "",
                excerpt: (data.excerpt as string) ?? "",
                content: content.trim(),
                tags: (data.tags as string[]) ?? [],
                readTime: (data.readTime as string) ?? "",
            } satisfies BlogPost;
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first
}

export const blogPosts: BlogPost[] = buildPosts();
