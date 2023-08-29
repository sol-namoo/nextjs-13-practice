type Props =  {
    params : {slug: string}
}

export function generateStaticParams(){
    const products = ['pants', 'skirt']
    return products.map(product => ({slug: product}))
}

export default function PantsPage({params}:Props){
    return <h1>{params.slug} 설명 페이지</h1>
}
