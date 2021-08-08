import { ReactNode } from "react";
import { getConfig } from "./api/config";
import { ApiProvider as CoreApiProvider, useApiProvider as useCoreApiProvider } from "@common";
import { shopifyHooks } from "./hooks";

const config = getConfig()

interface ShopifyProviderProps {
    children: ReactNode | ReactNode[]
}

export const ApiProvider = ({ children }: ShopifyProviderProps) => {
    return (
        <CoreApiProvider config={{ ...config }} hooks={shopifyHooks}>
            {children}
        </CoreApiProvider>
    )
}

const useApiProvider = () => useCoreApiProvider()