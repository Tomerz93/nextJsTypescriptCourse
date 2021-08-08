import { Product as ShopifyProduct, ImageEdge, MoneyV2, ProductOption, ProductVariantConnection, SelectedOption } from '../schema'
import { Product } from '@common/types/product'

export const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) =>
    edges.map(({ node: { originalSrc: url, ...rest } }) => ({
        url: `/images/${url}`,
        ...rest
    }
    ))

const normalizeProductVariants = ({ edges }: ProductVariantConnection) => {
    return edges.map(({ node }) => {
        const { id, selectedOptions, sku, title, priceV2, compareAtPriceV2 } = node

        return {
            id,
            name: title,
            sku: sku || id,
            price: +priceV2.amount,
            listPrice: +compareAtPriceV2?.amount,
            requiresShipping: true,
            options: selectedOptions.map(({ name, value }: SelectedOption) => {
                const option = normalizeProductOption({
                    id,
                    name,
                    values: [value]
                })
                return option
            })
        }
    })
}

export const normalizeProductOption = ({
    id,
    values,
    name: displayName
}: ProductOption) => {
    const normalized = {
        id,
        displayName,
        values: values.map(value => {
            let output: any = {
                label: value
            }
            // color or colour 
            if (displayName.match(/colou?r/gi)) {
                output = {
                    ...output,
                    hexColor: value
                }
            }
            return output
        })
    }
    return normalized
}

export const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => (
    {
        value: +amount,
        currencyCode
    }
)
export const normalizeProduct = (productNode: ShopifyProduct): Product => {
    const {
        id,
        title: name,
        handle,
        vendor,
        images: imageConnection,
        priceRange,
        description,
        variants,
        options,
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
        variants: variants ? normalizeProductVariants(variants) : [],
        options: options ? options.filter((o) => o.name !== 'Title').map(o => normalizeProductOption(o)) : [],
        price: normalizeProductPrice(priceRange.minVariantPrice),        // matches all slashes in the end and start 
        ...rest
    }
    return product
}

