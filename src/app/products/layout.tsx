import Link from "next/link";
import styles from "./layout.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "제품", template: "%s | 연습용 제품 사이트" },
  description: "멋진 제품을 확인해 보세요",
  icons: { icon: "/favicon.ico" },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">여성옷</Link>
        <Link href="/produts/men">남성옷</Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
