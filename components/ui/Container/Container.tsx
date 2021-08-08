import React, { ReactNode, FC } from "react";

interface Props {
    children: ReactNode | ReactNode[]
    el?: React.ComponentType<React.HTMLAttributes<HTMLElement>>
}

export const Container: FC<Props> = ({ children, el: Component = "div" }) => {
    return (
        <Component className="px-6 mx-auto max-w-8xl">
            {children}
        </Component>
    )
}

