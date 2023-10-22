import Link from "next/link";
import { getPosts } from "@/app/service/posts";
import PostCard from "@/app/views/post/PostCard";

export default async function PostList() {
  const posts = await getPosts();

  return (
    <>
      {posts.map((post, index) => (
        <Link key={index} href={`/posts/${post.path}`}>
          <li>
            <PostCard post={post} />
          </li>
        </Link>
      ))}
    </>
  );
}
