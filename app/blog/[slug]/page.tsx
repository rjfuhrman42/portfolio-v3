import { getMDXComponent } from "mdx-bundler/client";

import { getSortedPostsData, getPostDataBySlug } from "@/lib/posts";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { frontmatter, code } = await getPostDataBySlug(params.slug);

  const Component = getMDXComponent(code);

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <div className="max-w-[38rem] pt-8 md:pt-16 pb-4 px-4 xs:px-6 lg:px-0 flex flex-col items-center justify-center">
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.description}</p>
          <p>{frontmatter.date}</p>
          <article>
            <Component />
          </article>
        </div>
      </div>
    </>
  );
}
