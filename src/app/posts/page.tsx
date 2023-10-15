import Link from 'next/link';
import { getPosts } from '../service/posts';

export const revalidate = 60;

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <>
      <h1>포스트!</h1>
      <ul>
        {posts.map((post, index) => (
          <Link key={index} href={`/posts/${post.path}`}>
            {/** 카드 컴포넌트 만들기 */}
            <li>{post.title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
