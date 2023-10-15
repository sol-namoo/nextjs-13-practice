import path from 'path';
import { promises as fs } from 'fs';

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export type PostView = {
  prev?: Post;
  crr: Post;
  next?: Post;
};

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export async function getPost(path: string): Promise<PostView | undefined> {
  const posts = await getPosts();

  let indexCrr = 0;
  for (let i = 0; i < posts.length; i++) {
    console.log('crr', i);
    if (posts[i].path === path) {
      indexCrr = i;
      break;
    }
  }

  return {
    prev: posts[indexCrr - 1],
    crr: posts[indexCrr],
    next: posts[indexCrr + 1],
  };
}
