import path from "path";
import { promises as fs } from "fs";

export type Post = {
  [key: string]: string | boolean | undefined;
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
  content: string;
  image?: string;
};

export type PostView = {
  prev?: Post;
  crr: Post;
  next?: Post;
};

export async function getPosts(
  filterType?: string,
  filter?: string | boolean | undefined
): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const posts = await fs.readFile(filePath, "utf-8");

  if (filterType && filter) {
    return JSON.parse(posts).filter(
      (post: Post) => post[filterType] === filter
    );
  } else {
    return JSON.parse(posts);
  }
}

export async function getPost(crrPath: string): Promise<PostView | undefined> {
  const posts = await getPosts();
  let crrIndex = -1;
  let content = "";

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].path === crrPath) {
      crrIndex = i;
      break;
    }
  }

  if (crrIndex > -1) {
    const filePath = path.join(
      process.cwd(),
      "data",
      "posts",
      `${posts[crrIndex].path}.md`
    );
    content = await fs.readFile(filePath, "utf-8");
    posts[crrIndex].content = content;
  }

  const response = {
    prev: posts[crrIndex - 1],
    crr: posts[crrIndex],
    next: posts[crrIndex + 1],
  };

  return response;
}
