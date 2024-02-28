import dayjs from "dayjs";
import { getSortedPostsData, getPostDataBySlug } from "@/lib/posts";
import Navbar from "@/components/Navbar";
import MDXComponent from "@/components/MDXComponent";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { frontmatter, code } = await getPostDataBySlug(params.slug);

  const publishedDate = dayjs(frontmatter.date).format("MMMM D, YYYY");

  return (
    <>
      <div className="flex min-h-screen flex-col items-center overflow-x-hidden">
        <div className="w-full pt-6 bg-tan dark:bg-dark-blue flex flex-col justify-between items-center">
          <div className="container max-w-3xl px-6 xs:px-12">
            <Navbar />
            <div className="blog flex flex-col justify-evenly gap-y-4 pt-24 sm:pt-48">
              <h1 className="normal-case !text-5xl !font-body text-accent-pink dark:text-accent-teal">
                {frontmatter.title}
              </h1>
              <p className="text-xl font-body self-start pt-2 pb-4 sm:pt-4 sm:pb-8">
                {publishedDate}
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-3xl px-6 xs:px-12 py-8 sm:py-16 flex flex-col items-center justify-center">
          <p>{frontmatter.description}</p>
          <article className="blog">
            <MDXComponent code={code} />
          </article>
        </div>
      </div>
    </>
  );
}
