import { Post } from '@/app/service/posts';
import Link from 'next/link';

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/posts/${post.path}`}>
      <div className='rounded-lg overflow-hidden shadow-md'>
        <div className='bg-slate-300'>배너 영역</div>
        <div className='flex flex-col items-center text-center'>
          <p className='text-neutral-400 self-end'>{post.date}</p>
          <p className='font-medium'>{post.title}</p>
          <p>{post.description}</p>
          <div className='w-fit bg-green-100'>
            <p>{post.category}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
