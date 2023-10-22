import Link from "next/link";

import categories from "@/app/data/category";
import { getPosts } from "@/app/service/posts";
import PostCard from "@/app/views/post/PostCard";

export const revalidate = 60;

export default async function PostsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const posts = await getPosts(searchParams["category"] as string);

  return (
    <>
      <main className="flex">
        <ul className="grow columns-3">
          {posts.map((post, index) => (
            <Link key={index} href={`/posts/${post.path}`}>
              <li>
                <PostCard post={post} />
              </li>
            </Link>
          ))}
        </ul>
        <aside>
          <ul>
            <li key={"all"}>
              <Link href={`/posts?category`}>All posts</Link>
            </li>
            {categories.map((category, index) => (
              <li key={index}>
                <Link href={`/posts?category=${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </main>
    </>
  );
}
