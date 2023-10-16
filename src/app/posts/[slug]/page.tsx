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
  if (!data?.crr?.content) {
    return notFound();
  }
  return (
    <main className='rounded-lg overflow-hidden'>
      <section className='bg-slate-100'>
        <div>배너 영역</div>
        <h1>{data.crr.title}</h1>
        <div>{data.crr.description}</div>
        <div>{data.crr.content}</div>
      </section>
      <nav className='flex'>
        <Link href={`/posts/${data.prev?.path}`} className='w-1/2'>
          <div className='bg-slate-400'>{data.prev?.title}</div>
        </Link>
        <Link href={`/posts/${data.next?.path}`} className='w-1/2'>
          <div className='bg-slate-800'>{data.next?.title}</div>
        </Link>
      </nav>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.path }));
}
