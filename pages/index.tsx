import type { InferGetStaticPropsType } from 'next'
import { getAllProducts } from '@framework/products/get-all-products'
import { getConfig } from '@framework/api/config'

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  const config = getConfig()
  config
  return (
    <div>{products}</div>
  )
}

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)
  return {
    props: {
      products: JSON.stringify(products)
    },
    revalidate: 4 * 60 * 60
  }
}