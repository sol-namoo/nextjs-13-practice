import Link from 'next/link';
import notFound from '@/app/not-found';
import { getPost, getPosts } from '@/app/service/posts';

export const revalidate = 60;

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props) {
  return {
    title: params.slug,
  };
}

export default async function postPage({ params }: Props) {
  const data = await getPost(params.slug);
  if (!data) {
    return notFound();
  }

  console.log(data);
  return (
    <>
      {/** 본문 레이아웃 컴포넌트 */}
      <div>
        <div>배너 영역</div>
        <h1>{data.crr.title}</h1>
        <div>{data.crr.description}</div>
      </div>
      <nav>
        <Link href={`/posts/${data.prev?.path}`}>{data.prev?.title}</Link>
        <Link href={`/posts/${data.next?.path}`}>{data.next?.title}</Link>
      </nav>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.path }));
}
