import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { bundleMDX } from 'mdx-bundler';

const postsDirectory = path.join(process.cwd(), '_posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      slug,
      date: matterResult.data.date,
      title: matterResult.data.title,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostDataBySlug(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const source = fs.readFileSync(fullPath, "utf8");
  
    const { code, frontmatter } = await bundleMDX({source: source}, {
      xdmOptions(options) {
        options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
        options.rehypePlugins = [...(options?.rehypePlugins ?? []), rehypePrism];
        return options;
      },
    });

    return {
      slug,
      frontmatter,
      code,
    };
  }