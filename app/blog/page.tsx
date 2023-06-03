import Link from "next/link";
import { Post } from "./[slug]/page";

const BlogPage = async () => {
  // const posts: Post[] = await fetch(process.env.NEXTAUTH_URL!).then(
  //   (res) => res.json()
  // );
  const posts: Post[] = []
  return (
    <div>
        <ul>

        {posts.map((post) => (
            <li key={post.slug}>
                <Link href={`blog/${post.slug}`}>{post.title}</Link>
            </li>
        ))}
        </ul>
    </div>
  );
};

export default BlogPage;
