import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/app/service/posts';

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className='rounded-lg overflow-hidden shadow-md'>
      <Link href={`/posts/${post.path}`}>
        <div className='relative w-full aspect-video object-cover object-center'>
          <Image
            src={`/images/posts/${post.path}.png`}
            alt='pos banner'
            fill={true}
          />
        </div>
        <div className='flex flex-col items-center text-center gap-2 h-48 p-4'>
          <p className='text-neutral-400 self-end'>{post.date}</p>
          <p className='font-medium line-clamp-2'>{post.title}</p>
          <p className='line-clamp-2'>{post.description}</p>
          <div className='w-fit bg-green-100'>
            <p>{post.category}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
