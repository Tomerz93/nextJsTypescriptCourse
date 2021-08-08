import { useHook } from "@common/utils/use-hook"

export const useAddItem = () => {
    /**
    * The use AddItem hook will call the useHook function to get the hooks for the current provider and pass it down to any component who needs to use it in this way it is possible to create a generic pattern for getting the same functionality for different providers 
    * 
    */

    const hook = useHook((hooks) => hooks.cart.useAddItem)
    return hook.useHook({
        fetch: hook.fetcher
    })

}
