import { useAddItem } from "@common/cart";
import { MutationHook } from "@common/types/hooks";

export const handler: MutationHook = {
    fetcher: (input: any) => {
        return JSON.stringify(input) + 'modified'
    },
    useHook: ({ fetch }: any) => {
        return (input: any) => {
            const res = fetch(input)
            return {
                output: input
            }
        }
    }
}