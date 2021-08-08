import s from './Marquee.module.css'
import Ticker from 'react-ticker'
import cn from "classnames"

interface Props {
    children: React.ReactNode[]
    variant?: "primary" | "secondary"

}

export const Marquee: React.FC<Props> = ({ children, variant = "primary" }) => {
    const rootClassName = cn(
        s.root,
        {
            [s.secondary]: variant === "secondary"
        }
    )
    return (
        <div className={rootClassName}>
            <Ticker offset={80}>
                {() => <div className={s.container}>
                    {children}
                </div>}
            </Ticker>

        </div>
    )

}