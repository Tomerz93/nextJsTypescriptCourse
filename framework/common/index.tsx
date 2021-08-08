import { ReactNode, createContext, useContext, useMemo } from "react";
import { ApiConfig, ApiProviderContext } from "./types/api";
import { ApiHooks } from "@common/types/api";

interface ApiProviderProps {
    children: ReactNode | ReactNode[]
    config: ApiConfig
    hooks: ApiHooks
}


export const ApiContext = createContext<Partial<ApiProviderContext>>({})
/* Common Api provider is used to act as a sort of container for other Api Providers it can be extended to enable other frameworks

*/
export const ApiProvider = ({ children, config, hooks }: ApiProviderProps) => {
    const coreConfig = useMemo(() => {
        return {
            fetcher: config.fetch,
            hooks
        }
    }, [config.fetch, hooks])
    return <ApiContext.Provider value={coreConfig}>{children}</ApiContext.Provider>
}
export const useApiProvider = () => {
    return useContext(ApiContext) as ApiProviderContext
}
