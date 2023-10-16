import { NextRequest } from 'next/server';
import { getPosts } from '@/app/service/posts';
import { NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const posts = await getPosts(
    request.nextUrl.searchParams.get('category') as string,
  );
  return NextResponse.json(posts);
}
