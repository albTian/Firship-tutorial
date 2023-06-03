import { Metadata } from "next";

export const revalidate = 420 // Seconds between revalidation

export interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: { slug: string };
}

// To use dynamic metadata
const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const posts: Post[] = await fetch(`${process.env.NEXTAUTH_URL}/api/content`).then(
    (res) => res.json()
  );
  const post = posts.find((post) => post.slug === params.slug)!;
  return {
    title: post.title
  }
}

// To use static generation, for dynamic content that doesn't change often
const generateStaticParams = async () => {
  const posts: Post[] = await fetch(`${process.env.NEXTAUTH_URL}/api/content`).then(
    (res) => res.json()
  );
  return posts.map((post) => ({
    slug: post.slug
  }))
};

const BlogPostPage = async ({ params }: Props) => {
  const posts: Post[] = await fetch(`${process.env.NEXTAUTH_URL}/api/content`).then(
    (res) => res.json()
  );
  const post = posts.find((post) => post.slug === params.slug)!;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostPage;
export { generateStaticParams, generateMetadata };
