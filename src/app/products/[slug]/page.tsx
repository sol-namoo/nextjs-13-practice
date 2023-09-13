import notFound from "@/app/not-found";
import { getProduct, getProducts } from "@/app/service/products";

export const revalidate = 60;

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props) {
  return {
    title: params.slug,
  };
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.slug);
  if (!product) {
    return notFound();
  }
  return (
    <>
      <h1>{product.name} 설명 페이지</h1>
      <div> 가격: {product.price}</div>
    </>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.id }));
}
