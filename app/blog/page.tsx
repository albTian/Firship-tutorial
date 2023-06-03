import Link from "next/link";
import { Post } from "./[slug]/page";

const BlogPage = async () => {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );
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
