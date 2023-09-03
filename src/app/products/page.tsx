import Link from "next/link";
import styles from './layout.module.css'

export default function ProductsPage(){
const products = ['shirt', 'pants', 'skirt', 'shoes']

    return (
        <>
        <h1>제품 소개 페이지!</h1>
        <ul className={styles.ul}>
            {products.map((product, index)=> <Link key={index} href={`/products/${product}`}><li>{product}</li></Link>)}
        </ul>
        </>
    )
}