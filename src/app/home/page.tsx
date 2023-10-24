import { getPosts } from "@/app/service/posts";
import CardCarousel from "../views/home/CardCarousel";

export default async function ContactPage() {
  const posts = await getPosts();

  return (
    <>
      <h1>Featured Posts</h1>
      <CardCarousel posts={posts.filter((post) => post.featured === true)} />
      <h1>You may also like</h1>
      <CardCarousel posts={posts.filter((post) => post.featured === false)} />
    </>
  );
}
