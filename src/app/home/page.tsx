import { getPosts } from "@/app/service/posts";
import CardCarousel from "../views/home/CardCarousel";

export default async function ContactPage() {
  const posts = await getPosts();

  return (
    <>
      <h1>home</h1>
      <CardCarousel posts={posts} />
    </>
  );
}
