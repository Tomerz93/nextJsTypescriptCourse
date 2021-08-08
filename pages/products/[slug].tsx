import { Layout } from "@components/common"
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next"
import { getConfig } from "@framework/api/config"
import { getAllProductsPaths, getProduct } from "@framework/products"
import { ProductView } from "@components/Product"

export default function ProductSlug({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            {product && <ProductView product={product} />}
        </>
    )
}

ProductSlug.Layout = Layout


export const getStaticPaths: GetStaticPaths = async () => {
    const config = getConfig()
    const { products } = await getAllProductsPaths(config)
    return {
        paths: products.map(p => ({ params: { slug: p.slug } })),
        fallback: false
    }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string }>) => {
    const config = getConfig()
    const { product } = await getProduct({ config, variables: { slug: params!.slug } })
    return {
        props: {
            product
        }
    }
}