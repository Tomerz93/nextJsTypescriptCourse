import { useApiProvider } from "@common"
import { ApiHooks } from "@common/types/api"
import { MutationHook } from "@common/types/hooks"


export const useHook = (fn: (apiHooks: ApiHooks) => MutationHook) => {
    /* this general useHook function taps into the useApiProvider
    to tap into the fetcher function and the current hooks that are passed into the provider for a specific provider (ie shopify)
    */
    const { hooks } = useApiProvider()
    return fn(hooks)
}