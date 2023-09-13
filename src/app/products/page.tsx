import Link from "next/link";
import styles from "./layout.module.css";
import { getProducts } from "../service/products";

export const revalidate = 60;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul className={styles.ul}>
        {products.map((product, index) => (
          <Link key={index} href={`/products/${product.id}`}>
            <li>{product.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
