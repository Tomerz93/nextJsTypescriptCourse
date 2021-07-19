import { Product as ShopifyProduct, ImageEdge } from '../schema'
import { Product } from '@common/types/product'

export const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) =>
    edges.map(({ node: { originalSrc: url, ...rest } }) => ({
        url: `/images/${url}`,
        ...rest
    }
    ))
export const normalizeProduct = (productNode: ShopifyProduct): Product => {
    const {
        id,
        title: name,
        handle,
        vendor,
        images: imageConnection,
        description,
        ...rest
    } = productNode
    const product = {
        id,
        name,
        vendor,
        description,
        images: normalizeProductImages(imageConnection),
        path: `/${handle}`,
        slug: handle.replace(/^\+|\/+$/g, ""),
        // matches all slashes in the end and start 
        ...rest
    }
    return product
}

