import s from './ProductCard.module.css'
import Link from 'next/link'
import Image from 'next/image';
import { Product } from '@common/types/product'
interface Props {
    product: Product
    variant?: "simple" | "slim"
}

export const ProductCard: React.FC<Props> = ({ product, variant = 'simple' }) => {
    const placeholderImage = '/product-image-placeholder.svg'
    return (
        <Link href={`/products/${product.slug}`}>
            <a className={s.root}>
                {variant === 'slim' ? <>
                    <div className="inset-0 flex items-center justify-center absolute z-20">
                        <span className="bg-black text-white p-3 font-bold text-xl">
                            {product.name}
                        </span>
                    </div>
                    {product.images && (
                        <Image
                            className={s.productImage}
                            alt={product.name ?? "Product image"}
                            src={product.images[0].url ?? placeholderImage}
                            height={320}
                            width={320}
                            quality="85"
                            layout="fixed"
                        />
                    )}
                </> : (
                    <>
                        <div className={s.productBg} />
                        <div className={s.productTag}>
                            <h3 className={s.productTitle}>
                                <span > {product.name}</span>
                            </h3>
                            <span className={s.productPrice}>{product.price.value} {product.price.currencyCode}</span>
                        </div>
                        {product.images && (
                            <Image
                                className={s.productImage}
                                alt={product.name ?? "Product Image"}
                                src={product.images[0].url ?? placeholderImage}
                                height={540}
                                width={540}
                                quality="85"
                                layout="responsive" />
                        )}
                    </>
                )
                }
            </a>
        </Link>
    )
}